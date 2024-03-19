rules = document.getElementById('rules-btn')
rule = document.getElementById('rules')
close = document.getElementById('close-btn')

rules.addEventListener('click', () => {
    rule.classList.remove('show')
})

close.addEventListener('click', () => {
    rules.classList.remove('close-btn')
})