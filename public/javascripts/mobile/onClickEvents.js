function onClickLogo() {
}


//Reseting Experience Image Position
var position = 0;
var position2 = 0;
var position3 = 0
var position4 = 0
var position5 = 0

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
    if (company == 3) {
        position3 += widthOfExperienceImage
        document.getElementById("experienceImageContainer4").style.left =
            position3 + "px"
        if (position3 == widthOfExperienceImage) {
            changeTransition(
                document.getElementById("experienceImageContainer4").style,
                "left 0"
            )
            document.getElementById("experienceImageContainer4").style.left =
                -3 * widthOfExperienceImage + "px"
            position3 = -3 * widthOfExperienceImage
        }
    }
    if (company == 4) {
        position4 += widthOfExperienceImage
        document.getElementById("experienceImageContainer5").style.left =
            position4 + "px"
        if (position4 == widthOfExperienceImage) {
            changeTransition(
                document.getElementById("experienceImageContainer5").style,
                "left 0"
            )
            document.getElementById("experienceImageContainer5").style.left =
                -3 * widthOfExperienceImage + "px"
            position4 = -3 * widthOfExperienceImage
        }
    }
    if (company == 5) {
        position5 += widthOfExperienceImage
        document.getElementById("experienceImageContainer6").style.left =
            position5 + "px"
        if (position5 == widthOfExperienceImage) {
            changeTransition(
                document.getElementById("experienceImageContainer6").style,
                "left 0"
            )
            document.getElementById("experienceImageContainer6").style.left =
                -3 * widthOfExperienceImage + "px"
            position5 = -3 * widthOfExperienceImage
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
    if (company == 3) {
        position3 -= widthOfExperienceImage
        document.getElementById("experienceImageContainer4").style.left =
            position3 + "px"
        if (position3 == -4 * widthOfExperienceImage) {
            changeTransition(
                document.getElementById("experienceImageContainer4").style,
                "left 0"
            )
            document.getElementById("experienceImageContainer4").style.left =
                0 + "px"
            position3 = 0
        }
    }
    if (company == 4) {
        position4 -= widthOfExperienceImage
        document.getElementById("experienceImageContainer5").style.left =
            position4 + "px"
        if (position4 == -4 * widthOfExperienceImage) {
            changeTransition(
                document.getElementById("experienceImageContainer5").style,
                "left 0"
            )
            document.getElementById("experienceImageContainer5").style.left =
                0 + "px"
            position4 = 0
        }
    }
    if (company == 5) {
        position5 -= widthOfExperienceImage
        document.getElementById("experienceImageContainer6").style.left =
            position5 + "px"
        if (position5 == -4 * widthOfExperienceImage) {
            changeTransition(
                document.getElementById("experienceImageContainer6").style,
                "left 0"
            )
            document.getElementById("experienceImageContainer6").style.left =
                0 + "px"
            position5 = 0
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
    if (company == 3) {
        console.log("pass")
        switch (clickedLocation) {
            case 0:
                position3 = 0
                document.getElementById(
                    "experienceImageContainer4"
                ).style.left = 0 + "px"
                position3 = 0
                break
            case 1:
                position3 = -widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer4"
                ).style.left = position3 + "px"
                break
            case 2:
                position3 = -2 * widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer4"
                ).style.left = position3 + "px"
                break
            case 3:
                position3 = -3 * widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer4"
                ).style.left = position3 + "px"
                break
        }
    }
    if (company == 4) {
        switch (clickedLocation) {
            case 0:
                position4 = 0
                document.getElementById(
                    "experienceImageContainer5"
                ).style.left = 0 + "px"
                position4 = 0
                break
            case 1:
                position4 = -widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer5"
                ).style.left = position4 + "px"
                break
            case 2:
                position4 = -2 * widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer5"
                ).style.left = position4 + "px"
                break
            case 3:
                position4 = -3 * widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer5"
                ).style.left = position4 + "px"
                break
        }
    }
    if (company == 5) {
        switch (clickedLocation) {
            case 0:
                position5 = 0
                document.getElementById(
                    "experienceImageContainer6"
                ).style.left = 0 + "px"
                position5 = 0
                break
            case 1:
                position5 = -widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer6"
                ).style.left = position5 + "px"
                break
            case 2:
                position5 = -2 * widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer6"
                ).style.left = position5 + "px"
                break
            case 3:
                position5 = -3 * widthOfExperienceImage
                document.getElementById(
                    "experienceImageContainer6"
                ).style.left = position5 + "px"
                break
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
    if (company == 3) {
        document.getElementById(
            "experienceLocationUAWeb1"
        ).style.backgroundColor = "#bbb"
        document.getElementById(
            "experienceLocationUAWeb2"
        ).style.backgroundColor = "#bbb"
        document.getElementById(
            "experienceLocationUAWeb3"
        ).style.backgroundColor = "#bbb"
        document.getElementById(
            "experienceLocationUAWeb4"
        ).style.backgroundColor = "#bbb"
        switch (position3) {
            case 0:
                document.getElementById(
                    "experienceLocationUAWeb1"
                ).style.backgroundColor = "#2a26ff"
                break
            case -widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationUAWeb2"
                ).style.backgroundColor = "#2a26ff"
                break
            case -2 * widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationUAWeb3"
                ).style.backgroundColor = "#2a26ff"
                break
            case -3 * widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationUAWeb4"
                ).style.backgroundColor = "#2a26ff"
                break
        }
    }
    if (company == 4) {
        document.getElementById("experienceLocationAS1").style.backgroundColor =
            "#bbb"
        document.getElementById("experienceLocationAS2").style.backgroundColor =
            "#bbb"
        document.getElementById("experienceLocationAS3").style.backgroundColor =
            "#bbb"
        document.getElementById("experienceLocationAS4").style.backgroundColor =
            "#bbb"
        switch (position4) {
            case 0:
                document.getElementById(
                    "experienceLocationAS1"
                ).style.backgroundColor = "#2a26ff"
                break
            case -widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationAS2"
                ).style.backgroundColor = "#2a26ff"
                break
            case -2 * widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationAS3"
                ).style.backgroundColor = "#2a26ff"
                break
            case -3 * widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationAS4"
                ).style.backgroundColor = "#2a26ff"
                break
        }
    }
    if (company == 5) {
        document.getElementById(
            "experienceLocationAdplin1"
        ).style.backgroundColor = "#bbb"
        document.getElementById(
            "experienceLocationAdplin2"
        ).style.backgroundColor = "#bbb"
        document.getElementById(
            "experienceLocationAdplin3"
        ).style.backgroundColor = "#bbb"
        document.getElementById(
            "experienceLocationAdplin4"
        ).style.backgroundColor = "#bbb"
        switch (position5) {
            case 0:
                document.getElementById(
                    "experienceLocationAdplin1"
                ).style.backgroundColor = "#2a26ff"
                break
            case -widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationAdplin2"
                ).style.backgroundColor = "#2a26ff"
                break
            case -2 * widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationAdplin3"
                ).style.backgroundColor = "#2a26ff"
                break
            case -3 * widthOfExperienceImage:
                document.getElementById(
                    "experienceLocationAdplin4"
                ).style.backgroundColor = "#2a26ff"
                break
        }
    }
}

function inputClicked(input){
        document.getElementsByClassName('contactLabel')[input].style.top = '-28px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '35px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'gray';
        document.getElementsByClassName('contactBar2')[input].style.left = '0';
        document.getElementsByClassName('inputContainer')[input].children[0].focus();
}
function inputOut(input){
    if(input == 0 && document.getElementsByClassName('inputContainer')[input].children[0].value ==""){
        document.getElementsByClassName('contactLabel')[input].style.top = '10px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '45px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'black';
    }
    if(input == 1 && document.getElementsByClassName('inputContainer')[input].children[0].value ==""){
        document.getElementsByClassName('contactLabel')[input].style.top = '10px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '45px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'black';
    }
    if(input == 2 && document.getElementsByClassName('inputContainer')[input].children[0].value ==""){
        document.getElementsByClassName('contactLabel')[input].style.top = '10px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '45px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'black';
    }
    document.getElementsByClassName('contactBar2')[input].style.left = '-100%';
}

function validateForm(){
    let name = document.getElementsByClassName('inputContainer')[0].children[0].value
    let email = document.getElementsByClassName('inputContainer')[1].children[0].value
    let message = document.getElementsByClassName('inputContainer')[2].children[0].value
    if(name.length < 1){
        document.getElementsByClassName('inputContainer')[0].children[0].focus();
        document.getElementsByClassName('contactLabel')[0].innerHTML = 'Please Insert Name';
    }else if(email.length < 1){
        document.getElementsByClassName('inputContainer')[1].children[0].focus();
        document.getElementsByClassName('contactLabel')[1].innerHTML = 'Please Insert Email';
    }else if(validateEmail(email) == false){
        document.getElementsByClassName('inputContainer')[1].children[0].focus();
        document.getElementsByClassName('contactLabel')[1].innerHTML = 'Please Insert Valid Email Address';
    }else if(message.length <1){
        document.getElementsByClassName('inputContainer')[2].children[0].focus();
        document.getElementsByClassName('contactLabel')[2].innerHTML = 'Please Insert Message';
    }else{
        document.getElementsByClassName('contactLabel')[0].innerHTML = 'Name';
        document.getElementsByClassName('contactLabel')[1].innerHTML = 'Email';
        document.getElementsByClassName('contactLabel')[2].innerHTML = 'Message';
        $.ajax({
            type: "POST",
            url: window.location.origin + "/email",
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

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
