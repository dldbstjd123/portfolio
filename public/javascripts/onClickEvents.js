function onClickLogo(){
}


//Reseting Experience Image Position
var position = 0;
function slideToLeft(n){
    position += 700
    document.getElementById("experienceImageContainer1").style.left = position+'px';
    if(position == 700){
        changeTransition(document.getElementById("experienceImageContainer1").style, 'left 0')
        document.getElementById("experienceImageContainer1").style.left = -1400+'px';
        position = -1400
        //changeTransition(document.getElementById("experienceImageContainer1").style, 'left 2s')
    }
}

function slideToRight(n){
    position -= 700
    document.getElementById("experienceImageContainer1").style.left = position+'px';
    if(position == -2100){
        changeTransition(document.getElementById("experienceImageContainer1").style, 'left 0')
        document.getElementById("experienceImageContainer1").style.left = 0+'px';
        position = 0
        //changeTransition(document.getElementById("experienceImageContainer1").style, 'left 2s')
    }
}

function changeTransition(element, value){
    element.transition = value;
    element.webkitTransition = value;
}