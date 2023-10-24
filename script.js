var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particlesOnScreen = 350;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight-150;


function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

function createSnowFlakes() {
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: Math.random() * w,  
            y: Math.random() * h,  
            opacity: Math.random(),  
            speedX: random(-11, 11),  
            speedY: random(7, 15),    
            radius:random(0.5, 4.2),
        })
    }
};

function drawSnowFlakes(){
    for(var i = 0; i < particlesArray.length; i++){    
        var gradient = ctx.createRadialGradient(  
            particlesArray[i].x,   
            particlesArray[i].y,   
            0,                     
            particlesArray[i].x,   
            particlesArray[i].y,   
            particlesArray[i].radius  
            );

            gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")");  // white
            gradient.addColorStop(.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")");  // bluish
            gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");   // lighter bluish
            ctx.beginPath(); 
            ctx.arc(
            particlesArray[i].x,  
            particlesArray[i].y,  
            particlesArray[i].radius,  
            0,                         
            Math.PI*2,                 
            false                     
            );

        ctx.fillStyle = gradient;   
        ctx.fill();                 
    }
};

function moveSnowFlakes(){
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {                                                                               
            particlesArray[i].x = Math.random() * w * 1.5;
            particlesArray[i].y = -50;
        }
    }
};

function updateSnowFall  () {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();
};


// setInterval(updateSnowFall,50);
// createSnowFlakes();

function pause(){
    document.getElementById("btn2").style.display="block"
    document.getElementById("btn1").style.display="none"
    document.getElementById("btn3").style.display="none"
    document.getElementById("btn4").style.display="none"
    location.reload()
}
function play(){
    document.getElementById("btn1").style.display="block"
    document.getElementById("btn2").style.display="none"
    document.getElementById("btn3").style.display="block"
    document.getElementById("btn4").style.display="none"
    setInterval(updateSnowFall,50);
    createSnowFlakes();
}
function day(){
document.getElementById("canvas").style.backgroundColor="#48c3e7"
document.querySelector("body").style.backgroundColor="#48c3e7"
document.getElementById("btn4").style.display="block"
document.getElementById("btn3").style.display="none"
}
function night(){
    document.getElementById("canvas").style.backgroundColor="black"
    document.querySelector("body").style.backgroundColor="black"
    document.getElementById("btn4").style.display="none"
    document.getElementById("btn3").style.display="block"
}