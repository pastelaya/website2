open = document.getElementById('rules-btn')
rules = document.getElementById('rules')
close = document.getElementById('close-btn')
var audio = new Audio('sounds/roblox-bye.mp3');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

// ball properties
ball = {
    x: canvas.width / 2,
    y: cancas.height / 2,
    size: 10,
    speed: 4,
    dx: 4;
    dy: -4;
}

// draw ball on canvas
function drawBall() {

}

// rules open and close event handlers
open.addEventListener('click', () => {
    rules.classList.add('show')
    audio.play(audio);
})

close.addEventListener('click', () => {
    rules.classList.remove('show')
})