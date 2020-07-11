var topLayoutHeight = 0;
var aboutSectionHeight = 0;
var currentOption = 'about';
var numberofOptions = 0;
var movingPercentage = 0;
function onLoad() {
    topLayoutHeight = document.getElementById('topLayout').clientHeight + document.getElementById('topBar').clientHeight;
    aboutSectionHeight = document.getElementById('aboutSection').clientHeight + document.getElementById('moreToExperience').clientHeight
    numberofOptions = document.getElementById('navigation').childElementCount;
    movingPercentage = 100 / numberofOptions
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('introduction').style.opacity = '100'
    document.getElementById('introduction').style.top = '0px'
    delayedEffect();
    nameEffect();
    moreEffect();
    sliderEffect();
    //document.getElementById('footerLayout').style.top = document.getElementById('bodyWrapper').clientHeight + 'px';
}

function delayedEffect() {
    setTimeout(function () {
        document.getElementById('introduction2').style.opacity = '100'
    }, 1000)
    setTimeout(function () {
        document.getElementById('introduction2').style.left = '0px'
    }, 1500)
}

function nameEffect() {
    setInterval(function () {
        for (let i = 0; i < document.getElementById('myName').childElementCount; i++) {
            setTimeout(function () {
                document.getElementById('myName').children[i].style.bottom = '15px'
            }, i * 100)
        }
        for (let i = 0; i < document.getElementById('myName').childElementCount; i++) {
            setTimeout(function () {
                document.getElementById('myName').children[i].style.bottom = '0px'
            }, (i + 1) * 150)
        }
    }, 3000)
}

function moreEffect() {
    setTimeout(function () {
        document.getElementById('moreIcon').style.opacity = '100'
        setInterval(function () {
            document.getElementById('moreIcon').style.transform = 'rotate(360deg)'
            setTimeout(function () {
                document.getElementById('moreIcon').style.transform = 'rotate(0deg)'
            }, 2500)
        }, 5000)
    }, 2000);
    setTimeout(function(){
        document.getElementById('aboutCode').style.opacity = '100'
        document.getElementById('aboutCode').style.transform = 'rotateY(45deg) rotate(-3deg)'
        document.getElementById('aboutFoundation').style.opacity = '90';
        document.getElementById('aboutFoundation').style.transform = 'translate(25px,25px) rotateY(45deg) rotate(-3deg)'
        document.getElementById('aboutImages').style.opacity = '80';
        document.getElementById('aboutImages').style.transform = 'translate(50px,50px) rotateY(45deg) rotate(-3deg)'
        document.getElementById('aboutText').style.opacity = '70';
        document.getElementById('aboutText').style.transform = 'translate(75px,75px) rotateY(45deg) rotate(-3deg)'
    },3500)
}
console.log(document.getElementsByClassName('experienceButtonLeft')[0])
function sliderEffect(){
    setInterval(function(){
        let numberOfElements = document.getElementsByClassName('experienceButtonLeft').length
        for(let i=0; i<numberOfElements; i++){
            document.getElementsByClassName('experienceButtonLeft')[i].style.right = '15px'
            document.getElementsByClassName('experienceButtonRight')[i].style.left = '15px'
        }
        setTimeout(function(){
            for(let i=0; i<numberOfElements; i++){
                document.getElementsByClassName('experienceButtonLeft')[i].style.right = '0px'
                document.getElementsByClassName('experienceButtonRight')[i].style.left = '0px'
            }
        },300)
    },5000)
}