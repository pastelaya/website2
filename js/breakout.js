open = document.getElementById('rules-btn')
rules = document.getElementById('rules')
close = document.getElementById('close-btn')
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

score = 0;

brickRowCount = 9;
brickColumnCount = 5;


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

// create brick properties
brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visibile: true,
}

// creating bricks

bricks = []
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        bricks[i][j] = {x, y, ...brickInfo}
    }
}


// draw paddle
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#bf9bc9'
    ctx.fill()
    ctx.closePath()
}

// draw score on canvas
function drawScore() {
    ctx.font = '20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width - 100, 30)
}

// draw bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ? '#bf9bc9' : 'transparent';
            ctx.fill()
            ctx.closePath()
        })

    })
}

// draw everything
function draw() {
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}

function update() {
    moveBall()
    movePaddle()
    draw()
    requestAnimationFrame(update)
}

update()

// move paddle on canvas
function movePaddle() {
    paddle.x = paddle.x + paddle.dx
}

// keydown event
function keyDown(e) {
    console.log(e.key)
}


// keyboard event handlers
document.addEventListener('keydown', keyDown)


// move ball on canvas
function moveBall() {

// ball collision (bottom)
if (ball)

// ball collision (left)
if (ball.x + ball.size < 0)
{
    (ball.dx = -1 & ball.dx)
}

// paddle collision
if (ball.x - ball.size > paddle.x && paddle.x + ball.size < paddle.x + paddle.w && ball.y + ball.size < paddle.y)
{
    ball.dy = -1 * ball.dy
}

/// brick collision
bricks.forEach(column => {
    column.forEach(brick => {
        if (
            brick.visible &&
            ball.x - ball.size > brick.w &&
            ball.x + ball.size < brick.x + brick.w &&
            ball.y - ball.size < brick.y + brick.h &&
            ball.y + ball.size > brick.y
            )
            {
            ball.dy = -1 * ball.dy
            brick.visible = false
            increaseScore()
            }
        })
    })
}


// rules open and close event handlers
open.addEventListener('click', () => {
    rules.classList.add('show')
})

close.addEventListener('click', () => {
    rules.classList.remove('show')
})
