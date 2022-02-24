const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => frontEnd(data))
};

const frontEnd = (quote) => {
    console.log(quote)
    const quotes = document.getElementById('quotes');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>${quote.quote}</1>
    `
    quotes.appendChild(div);
}