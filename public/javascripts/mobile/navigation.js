function onMouseOver(option) {
    
    
}
function onMouseOut(option) {

}

function onClick(option) {
    navigationClicked = 1;
    if (option == 'about') {
        currentOption = 'about'
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementsByClassName('movingBar')[0].style.backgroundColor = '#2a26ff';
    } else if (option == 'experience') {
        currentOption = 'experience'
        document.body.scrollTop = aboutSectionHeight - topLayoutHeight;
        document.documentElement.scrollTop = aboutSectionHeight - topLayoutHeight;
        document.getElementsByClassName('movingBar')[1].style.backgroundColor = '#2a26ff';
    } else if (option == 'skills') {
        currentOption = 'skills'
        document.body.scrollTop = aboutSectionHeight + experienceSectionHeight;
        document.documentElement.scrollTop = aboutSectionHeight + experienceSectionHeight;
        document.getElementsByClassName('movingBar')[2].style.backgroundColor = '#2a26ff';
    } else if (option == 'contact') {
        currentOption = 'contact'
        document.body.scrollTop = aboutSectionHeight + experienceSectionHeight + skillsSectionHeight;
        document.documentElement.scrollTop = aboutSectionHeight + experienceSectionHeight + skillsSectionHeight;
        document.getElementsByClassName('movingBar')[3].style.backgroundColor = '#2a26ff';
    }
    setTimeout(function () {
        document.getElementsByClassName('movingBar')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('movingBar')[1].style.backgroundColor = 'white';
        document.getElementsByClassName('movingBar')[2].style.backgroundColor = 'white';
        document.getElementsByClassName('movingBar')[3].style.backgroundColor = 'white';
        navigationClicked = 0;
    }, 1000)
}