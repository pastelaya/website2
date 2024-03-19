open = document.getElementById('rules-btn')
rules = document.getElementById('rules')
close = document.getElementById('close-btn')
var audio = new Audio('sounds/roblox-bye.mp3');

// rules open and close event handlers
open.addEventListener('click', () => {
    rules.classList.add('show')
    audio.play(audio);
})

close.addEventListener('click', () => {
    rules.classList.remove('show')
})