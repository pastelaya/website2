open = document.getElementById('rules-btn')
rules = document.getElementById('rules')
close = document.getElementById('close-btn')

open.addEventListener('click', () => {
    rules.classList.add('show')
})

close.addEventListener('click', () => {
    rules.classList.remove('show')
})