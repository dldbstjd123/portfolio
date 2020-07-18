function onMouseOver(option) {
    if (option == 'about'){
        document.getElementById('movingBar').style.marginLeft = '0%'
    } else if (option == 'experience') {
        document.getElementById('movingBar').style.marginLeft = movingPercentage + '%'
    } else if (option == 'skills') {
        document.getElementById('movingBar').style.marginLeft = 2*movingPercentage + '%'
    } else if (option == 'contact') {
        document.getElementById('movingBar').style.marginLeft = 3*movingPercentage + '%'
    }
}
function onMouseOut(option) {
    if (option != currentOption) {
        if (currentOption == 'about') {
            document.getElementById('movingBar').style.marginLeft = '0%'
        } else if (currentOption == 'experience') {
            document.getElementById('movingBar').style.marginLeft = movingPercentage + '%'
        } else if (currentOption == 'skills') {
            document.getElementById('movingBar').style.marginLeft = 2*movingPercentage + '%'
        } else if (currentOption == 'contact') {
            document.getElementById('movingBar').style.marginLeft = 3*movingPercentage + '%'
        }
    }
}

function onClick(option) {
    navigationClicked = 1;
    if (option == 'about'){
        currentOption = 'about'
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
        document.getElementById('movingBar').style.marginLeft = '0%'
    } else if (option == 'experience') {
        currentOption = 'experience'
        document.body.scrollTop =  aboutSectionHeight; 
        document.documentElement.scrollTop =  aboutSectionHeight; 
        document.getElementById('movingBar').style.marginLeft = movingPercentage + '%'
    } else if (option == 'skills') {
        currentOption = 'skills'
        document.body.scrollTop = topLayoutHeight + aboutSectionHeight + experienceSectionHeight; 
        document.documentElement.scrollTop = topLayoutHeight + aboutSectionHeight + experienceSectionHeight; 
        document.getElementById('movingBar').style.marginLeft = 2*movingPercentage + '%'
    } else if (option == 'contact') {
        currentOption = 'contact'
        document.body.scrollTop = topLayoutHeight + aboutSectionHeight + experienceSectionHeight + skillsSectionHeight; 
        document.documentElement.scrollTop = topLayoutHeight + aboutSectionHeight + experienceSectionHeight + skillsSectionHeight; 
        document.getElementById('movingBar').style.marginLeft = 3*movingPercentage + '%'
    }
    setTimeout(function(){
        navigationClicked = 0;
    },1000)
}