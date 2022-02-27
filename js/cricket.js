const rss = () => {
    fetch("https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=recent", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
                "x-rapidapi-key": "4427861b7bmshec95f48abab1638p147b9bjsn1ee2aa892194"
            }
        })
        .then(res => res.json())
        .then(data => frontEnd(data))
        // .catch(err => {
        //     console.error(err);
        // });
}
const frontEnd = (quote) => {
    console.log(quote)
    for (const iterator in quote) {
        console.log(iterator.typeMatches.matchType)
    }
    // const quotes = document.getElementById('quotes');
    // const div = document.createElement('div');
    // div.innerHTML = `
    // <h1>${quote.quote}</1>
    // `
    // quotes.appendChild(div);
}