const quotes = [
    "I'm not arguing, I'm just explaining why I'm right.",
    "I'm not bossy, I just know what you should be doing.",
    "Love is like a fart. If you have to force it, it's probably crap.",
    "I need a six-month vacation twice a year."
]

const quoteBtn = document.getElementById("quote-btn")
const inputEl = document.getElementById("input-el")

quoteBtn.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * quotes.length)
    inputEl.textContent = quotes[randomNum]
})