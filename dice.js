const redLeftD = document.querySelector(".lb-red");
const redRightD = document.querySelector(".rb-red");
const redC = document.querySelector(".c-red");
const redLeftF = document.querySelector(".lf-red");
const redRightF = document.querySelector(".rf-red");

const blueLeftB = document.querySelector(".lb-blue");
const blueRightB = document.querySelector(".rb-blue");
const blueC = document.querySelector(".c-blue");
const blueLeftF = document.querySelector(".lf-blue");
const blueRightF = document.querySelector(".rf-blue");

const ball = document.querySelector(".ball");

document.querySelector(".startDice").addEventListener("click", startFiveDice);
document.querySelector(".stopDice").addEventListener("click", stopFiveDice);

document.querySelector(".startLib").addEventListener("click", startLibero);

function startFiveDice() {
  ball.classList.add("dice-ball");
  blueLeftF.classList.add("dice-lf");
  blueRightF.classList.add("dice-rf");
  blueRightB.classList.add("dice-rb");
  blueLeftB.classList.add("dice-lb");
  blueC.classList.add("dice-c");
}

function startLibero() {
  ball.classList.add("dice-ball");
  blueLeftF.classList.add("dice-lf");
  blueRightF.classList.add("lib-rf");
  blueRightB.classList.add("dice-rb");
  blueLeftB.classList.add("dice-lb");
  blueC.classList.add("dice-c");
}

function stopFiveDice() {
  ball.classList.remove("dice-ball");
  blueLeftF.classList.remove("dice-lf");
  blueRightF.classList.remove("dice-rf");
  blueRightB.classList.remove("dice-rb");
  blueLeftB.classList.remove("dice-lb");
  blueC.classList.remove("dice-c");
}
