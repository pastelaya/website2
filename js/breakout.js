open = document.getElementById('rules-btn')
rules = document.getElementById('rules')
close = document.getElementById('close-btn')
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

// ctx.fillStyle = '#bf9bc9';
// ctx.fillRect(10, 10, 150, 100);

// rules open and close event handlers
open.addEventListener('click', () => {
    rules.classList.add('show')
})

close.addEventListener('click', () => {
    rules.classList.remove('show')
})

// ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

// draw ball on canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = '#bf9bc9'
    ctx.fill()
    ctx.closePath()
}

// create pattle properties

paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}

// draw paddle

function drawPaddle() {
    ctx.beginPath()
    crx.rect(paddle.x, paddle.y paddle.w, paddle.h)
    ctx.fillStyle = '#bf9bc9'
    ctx.fill()
    ctx.closePath()
}


drawPaddle()
drawBall()
