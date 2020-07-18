function onClickLogo() {
}


//Reseting Experience Image Position
var position = 0;
var position2 = 0;

function slideToLeft(company) {
    widthOfExperienceImage = document.getElementsByClassName('experienceImages')[0].clientWidth;
    console.log(widthOfExperienceImage)
    if (company == 0) {
        position += widthOfExperienceImage
        document.getElementById("experienceImageContainer1").style.left = position + 'px';
        if (position == widthOfExperienceImage) {
            changeTransition(document.getElementById("experienceImageContainer1").style, 'left 0')
            document.getElementById("experienceImageContainer1").style.left = -2 * widthOfExperienceImage + 'px';
            position = -2 * widthOfExperienceImage
        }
    }
    if (company == 2) {
        position2 += widthOfExperienceImage
        document.getElementById("experienceImageContainer3").style.left = position2 + 'px';
        if (position2 == widthOfExperienceImage) {
            changeTransition(document.getElementById("experienceImageContainer3").style, 'left 0')
            document.getElementById("experienceImageContainer3").style.left = -2 * widthOfExperienceImage + 'px';
            position2 = -2 * widthOfExperienceImage
        }
    }
    resetDotColor(company)
}

function slideToRight(company) {
    widthOfExperienceImage = document.getElementsByClassName('experienceImages')[0].clientWidth;
    if (company == 0) {
        position -= widthOfExperienceImage
        document.getElementById("experienceImageContainer1").style.left = position + 'px';
        if (position == -3 * widthOfExperienceImage) {
            changeTransition(document.getElementById("experienceImageContainer1").style, 'left 0')
            document.getElementById("experienceImageContainer1").style.left = 0 + 'px';
            position = 0
        }
    }
    if (company == 2) {
        position2 -= widthOfExperienceImage
        document.getElementById("experienceImageContainer3").style.left = position2 + 'px';
        if (position2 == -3 * widthOfExperienceImage) {
            changeTransition(document.getElementById("experienceImageContainer3").style, 'left 0')
            document.getElementById("experienceImageContainer3").style.left = 0 + 'px';
            position2 = 0
        }
    }
    resetDotColor(company)
}

function changeTransition(element, value) {
    element.transition = value;
    element.webkitTransition = value;
}

function moveSlider(company, clickedLocation) {
    widthOfExperienceImage = document.getElementsByClassName('experienceImages')[0].clientWidth;
    if (company == 0) {
        switch (clickedLocation) {
            case 0:
                position = 0
                document.getElementById("experienceImageContainer1").style.left = 0 + 'px';
                position = 0
                break;
            case 1:
                position = -widthOfExperienceImage;
                document.getElementById("experienceImageContainer1").style.left = position + 'px';
                break;
            case 2:
                position = -2 * widthOfExperienceImage;
                document.getElementById("experienceImageContainer1").style.left = position + 'px';
                break;
        }
    }
    if (company == 2) {
        switch (clickedLocation) {
            case 0:
                position2 = 0
                document.getElementById("experienceImageContainer3").style.left = 0 + 'px';
                position2 = 0
                break;
            case 1:
                position2 = -widthOfExperienceImage;
                document.getElementById("experienceImageContainer3").style.left = position2 + 'px';
                break;
            case 2:
                position2 = -2 * widthOfExperienceImage;
                document.getElementById("experienceImageContainer3").style.left = position2 + 'px';
                break;
        }
    }
    resetDotColor(company)
}
function resetDotColor(company) {
    widthOfExperienceImage = document.getElementsByClassName('experienceImages')[0].clientWidth;
    if (company == 0) {
        document.getElementById("experienceLocationMysuit1").style.backgroundColor = '#bbb'
        document.getElementById("experienceLocationMysuit2").style.backgroundColor = '#bbb'
        document.getElementById("experienceLocationMysuit3").style.backgroundColor = '#bbb'
        switch (position) {
            case 0:
                document.getElementById("experienceLocationMysuit1").style.backgroundColor = '#2a26ff'
                break;
            case -widthOfExperienceImage:
                document.getElementById("experienceLocationMysuit2").style.backgroundColor = '#2a26ff'
                break;
            case -2 * widthOfExperienceImage:
                document.getElementById("experienceLocationMysuit3").style.backgroundColor = '#2a26ff'
                break;
        }
    }
    if (company == 2) {
        document.getElementById("experienceLocationUA1").style.backgroundColor = '#bbb'
        document.getElementById("experienceLocationUA2").style.backgroundColor = '#bbb'
        document.getElementById("experienceLocationUA3").style.backgroundColor = '#bbb'
        switch (position2) {
            case 0:
                document.getElementById("experienceLocationUA1").style.backgroundColor = '#2a26ff'
                break;
            case -widthOfExperienceImage:
                document.getElementById("experienceLocationUA2").style.backgroundColor = '#2a26ff'
                break;
            case -2 * widthOfExperienceImage:
                document.getElementById("experienceLocationUA3").style.backgroundColor = '#2a26ff'
                break;
        }
    }
}

function inputClicked(input){
        document.getElementsByClassName('contactLabel')[input].style.top = '-28px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '15px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'gray';
        document.getElementsByClassName('contactBar2')[input].style.left = '0';
}
function inputOut(input){
    if(input == 0 && document.getElementsByClassName('inputContainer')[input].children[0].value ==""){
        document.getElementsByClassName('contactLabel')[input].style.top = '10px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '25px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'black';
    }
    if(input == 1 && document.getElementsByClassName('inputContainer')[input].children[0].value ==""){
        document.getElementsByClassName('contactLabel')[input].style.top = '10px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '25px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'black';
    }
    if(input == 2 && document.getElementsByClassName('inputContainer')[input].children[0].value ==""){
        document.getElementsByClassName('contactLabel')[input].style.top = '10px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '25px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'black';
    }
    document.getElementsByClassName('contactBar2')[input].style.left = '-100%';
}

function validateForm(){
    console.log('validating')
    let name = document.getElementsByClassName('inputContainer')[0].children[0].value
    let email = document.getElementsByClassName('inputContainer')[1].children[0].value
    let message = document.getElementsByClassName('inputContainer')[2].children[0].value
    $.ajax({
        type: "POST",
        url: "https://yo0on.com/email",
        headers: { 'Access-Control-Allow-Origin': '*'},
        //url: "http://localhost:1121/email",
        data: {name, email, message},
        success: function(data){
            if(data.status == 'succeed'){
                document.getElementById('contactFormAfterSubmit').innerHTML = "Thank you!, Your message has been received.";
                document.getElementsByClassName('inputContainer')[0].children[0].value = "";
                document.getElementsByClassName('inputContainer')[1].children[0].value = "";
                document.getElementsByClassName('inputContainer')[2].children[0].value = "";
            }else if(data.status == 'failed'){
                document.getElementById('contactFormAfterSubmit').innerHTML = "Sorry, please try it again later.";
            }
        },
        dataType:'json'
      });

}