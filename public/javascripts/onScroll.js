window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (navigationClicked == 0) {
        if (document.body.scrollTop <= aboutSectionHeight || document.documentElement.scrollTop <= aboutSectionHeight) {
            currentOption = 'about'
            document.getElementById('movingBar').style.marginLeft = '0%'
        }
        if (document.body.scrollTop > aboutSectionHeight || document.documentElement.scrollTop > aboutSectionHeight) {
            currentOption = 'experience'
            document.getElementById('movingBar').style.marginLeft = movingPercentage + '%'
        }
        if (document.body.scrollTop >  aboutSectionHeight + experienceSectionHeight || document.documentElement.scrollTop > aboutSectionHeight + experienceSectionHeight) {
            currentOption = 'skills'
            document.getElementById('movingBar').style.marginLeft = 2 * movingPercentage + '%'
        }
        if (document.body.scrollTop > aboutSectionHeight + experienceSectionHeight + skillsSectionHeight || document.documentElement.scrollTop > aboutSectionHeight + experienceSectionHeight + skillsSectionHeight) {
            currentOption = 'contact'
            document.getElementById('movingBar').style.marginLeft = 3 * movingPercentage + '%'
        }
    }
}