function onClickLogo() {
}


//Reseting Experience Image Position
var position = 0;
function slideToLeft(company) {
    if (company == 0) {
        position += 700
        document.getElementById("experienceImageContainer1").style.left = position + 'px';
        if (position == 700) {
            changeTransition(document.getElementById("experienceImageContainer1").style, 'left 0')
            document.getElementById("experienceImageContainer1").style.left = -1400 + 'px';
            position = -1400
        }
    }
    resetDotColor(company)
}

function slideToRight(company) {
    if (company == 0) {
        position -= 700
        document.getElementById("experienceImageContainer1").style.left = position + 'px';
        if (position == -2100) {
            changeTransition(document.getElementById("experienceImageContainer1").style, 'left 0')
            document.getElementById("experienceImageContainer1").style.left = 0 + 'px';
            position = 0
        }
    }
    resetDotColor(company)
}

function changeTransition(element, value) {
    element.transition = value;
    element.webkitTransition = value;
}

function moveSlider(company, clickedLocation) {
    if (company == 0) {
        switch (clickedLocation) {
            case 0:
                position = 0
                document.getElementById("experienceImageContainer1").style.left = 0 + 'px';
                position = 0
                break;
            case 1:
                position = -700;
                document.getElementById("experienceImageContainer1").style.left = position + 'px';
                break;
            case 2:
                position = -1400;
                document.getElementById("experienceImageContainer1").style.left = position + 'px';
                break;
        }
    }
    resetDotColor(company)
}
function resetDotColor(company) {
    if (company == 0) {
        document.getElementById("experienceLocationMysuit1").style.backgroundColor = '#bbb'
        document.getElementById("experienceLocationMysuit2").style.backgroundColor = '#bbb'
        document.getElementById("experienceLocationMysuit3").style.backgroundColor = '#bbb'
        switch (position) {
            case 0:
                document.getElementById("experienceLocationMysuit1").style.backgroundColor = '#2a26ff'
                break;
            case -700:
                document.getElementById("experienceLocationMysuit2").style.backgroundColor = '#2a26ff'
                break;
            case -1400:
                document.getElementById("experienceLocationMysuit3").style.backgroundColor = '#2a26ff'
                break;
        }
    }
}