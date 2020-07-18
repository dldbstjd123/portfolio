function onMouseOverAbout(layer){
    if(aboutRightSideLoaded == true){
        if(layer == 0){
            document.getElementById('aboutCode').style.transition = 'ease-out 0s'
            document.getElementById('aboutCode').style.zIndex = 1
        }
        if(layer == 1){
            document.getElementById('aboutFoundation').style.transition = 'ease-out 0s'
            document.getElementById('aboutFoundation').style.zIndex = 1
        }
        if(layer == 2){
            document.getElementById('aboutImages').style.transition = 'ease-out 0s'
            document.getElementById('aboutImages').style.zIndex = 1
        }
        if(layer == 3){
            document.getElementById('aboutText').style.transition = 'ease-out 0s'
            document.getElementById('aboutText').style.zIndex = 1
        }
    }
}

function onMouseOutAbout(layer){
    if(layer == 0){
        document.getElementById('aboutCode').style.zIndex = 0
    }
    if(layer == 1){
        document.getElementById('aboutFoundation').style.zIndex = 0
    }
    if(layer == 2){
        document.getElementById('aboutImages').style.zIndex = 0
    }
    if(layer == 3){
        document.getElementById('aboutText').style.zIndex = 0
    }
}

function changeColorToBlue(x, position){
    x.style.borderTop='7px solid blue';
    if(position=='left'){
        x.style.borderLeft='7px solid blue';
    }else{
        x.style.borderRight='7px solid blue';
    }
}
function changeColorToBlack(x, position){
    x.style.borderTop='7px solid black';
    if(position=='left'){
        x.style.borderLeft='7px solid black';
    }else{
        x.style.borderRight='7px solid black';
    }
}