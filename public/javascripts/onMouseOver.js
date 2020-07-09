function onMouseOverAbout(layer){
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