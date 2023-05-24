const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
}

refs.stopBtn.disabled = true;
let intervalId = null;

refs.startBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.body.style.backgroundColor = getRandomHexColor();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
});

refs.stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}