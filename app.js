const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const button = document.querySelector("#start");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  squareAnimate(randomPosition);

  // assign the id of randomPosition to hitPosition
  hitPosition = randomPosition.id;
}

function squareAnimate(square) {
  square.classList.add("selected");
  setTimeout(() => {
    square.classList.remove("selected");
  }, 100);
}

square.forEach((square) => {
  square.addEventListener("mouseup", () => {
    if (square.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function countDown() {
  randomSquare();
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    document.querySelector(".mole").classList.remove("mole");
    alert(`GAME OVER! Your final score is ${result}`);
  }
}

// let timerId = setInterval(countDown, 1000)
let start = false;

button.addEventListener("click", () => {
    console.log(start);
  if (!start) {
    play();
  }
  start = true;
});

function play(timerId) {
    result = 0
    score.textContent = result;
  this.timerId = setInterval(() => {
    countDown();
    if (currentTime === 0) {
      clearInterval(this.timerId);
      timeLeft.textContent = 30;
      currentTime = timeLeft.textContent;
      start = false
    }
  }, 1000);
}
