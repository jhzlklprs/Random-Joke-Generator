const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


btn.addEventListener('click', getJoke);


function getJoke() {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("fade");
    });
}