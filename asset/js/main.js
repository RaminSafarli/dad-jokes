const btn = document.querySelector(".btn");
const jokeBox = document.querySelector(".joke");

fetch("https://icanhazdadjoke.com", {
  headers: {
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    jokeBox.textContent = data.joke;
  });

btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      jokeBox.textContent = data.joke;
    });
});
