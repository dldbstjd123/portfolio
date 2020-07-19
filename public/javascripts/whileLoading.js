// var loadingX = 0;
// var loadingY = 50;
// setInterval(() => {
//     //document.getElementById('loadingMovingBar').style.left = '100%'
//     //document.getElementById('loadingMovingBar').style.transition = 'left ease 2s'
//     console.log(`X = ${loadingX}`)
//     console.log(`Y = ${loadingY}`)
//     let loadingToX = loadingX + 5;
//     let loadingToY = loadingY
//     if(loadingX > 20 && loadingX < 30){
//         loadingToY = loadingY + 5
//     }else if (loadingX > 30 && loadingX < 40){
//         loadingToY = loadingY - 5
//     }
//     document.getElementById('loadingStroke').setAttribute('d', `M${loadingX} ${loadingY} L${loadingToX} ${loadingToY}`)
//     loadingX += 1

// }, 100);

// setInterval(()=>{
//     var randomBetween0To50 = 0;
//     document.getElementById('loadingStroke').setAttribute('d', `M0 50 L48 50 L49 ${randomBetween0To50} L51 50 L100 50`)
// }, 1000)