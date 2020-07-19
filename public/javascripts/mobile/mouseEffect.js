const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.translate(0.5, 0.5);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
const numberOfParticle = 0;


const mouse = {
    x: null,
    y: null
}
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    //let theParticle = new Particle(mouse.x, mouse.y)
    //theParticle.draw()
});
setInterval(function () {
    mouse.x = undefined;
    mouse.y = undefined;
}, 200);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    draw() {
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 20, this.y);
        ctx.lineTo(this.x + 20, this.y + 20);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
    disapear(){

    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
    particleArray = [];
    for (let i = 0; i < numberOfParticle; i++) {
        let x = mouse.x
        let y = mouse.y
        particleArray.push(new Particle(x, y))
    }
}

function animate() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
    }
}

//init();
//animate();
console.log(ctx)
// ctx.moveTo(200.5124, 200.5);
// ctx.lineTo(350, 200.5);
// ctx.lineTo(350, 350);
// ctx.lineTo(200.5, 200.5);
// ctx.stroke(); 