window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (navigationClicked == 0) {
        if (document.body.scrollTop <= aboutSectionHeight || document.documentElement.scrollTop <= aboutSectionHeight) {
            currentOption = 'about'
            document.getElementById('movingBar').style.marginLeft = '0%'
        }
        if (document.body.scrollTop > aboutSectionHeight - 50 || document.documentElement.scrollTop > aboutSectionHeight - 50) {
            currentOption = 'experience'
            document.getElementById('movingBar').style.marginLeft = movingPercentage + '%'
        }
    }
}