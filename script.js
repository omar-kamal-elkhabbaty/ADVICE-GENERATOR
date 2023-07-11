const
    h1 = document.querySelector("h1"),
    quote = document.querySelector("q");

// fetch API
const req = fetch("https://api.adviceslip.com/advice");

req
    .then((data) => {
    const result = data.json();
    return result;
    })
    .then((result) => {
    h1.textContent += result.slip.id;
    quote.textContent = result.slip.advice
});