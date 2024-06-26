// 01-color-switcher.js

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
let intervalId;

startButton.addEventListener("click", () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
});
