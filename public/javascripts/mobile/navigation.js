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
        document.body.scrollTop = aboutSectionHeight;
        document.documentElement.scrollTop = aboutSectionHeight;
    } else if (option == 'skills') {
        currentOption = 'skills'
        document.body.scrollTop = aboutSectionHeight + experienceSectionHeight;
        document.documentElement.scrollTop = aboutSectionHeight + experienceSectionHeight;
    } else if (option == 'contact') {
        currentOption = 'contact'
        document.body.scrollTop = aboutSectionHeight + experienceSectionHeight + skillsSectionHeight;
        document.documentElement.scrollTop = aboutSectionHeight + experienceSectionHeight + skillsSectionHeight;
    }
    setTimeout(function () {
        navigationClicked = 0;
    }, 1000)
}