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

startFiveDice();

document.querySelector(".startDice").addEventListener("click", startFiveDice);
document.querySelector(".pause").addEventListener("click", pauseAnimation);
document.querySelector(".play").addEventListener("click", resumeAnimation);

function startFiveDice() {
  ball.classList = "";
  blueLeftF.classList = "";
  blueRightF.classList = "";
  blueRightB.classList = "";
  blueLeftB.classList = "";
  blueC.classList = "";

  this.offsetHeight;

  ball.classList.add("ball");
  blueLeftF.classList.add("attacker", "lf-blue");
  blueRightF.classList.add("attacker", "rf-blue");
  blueRightB.classList.add("attacker", "rb-blue");
  blueLeftB.classList.add("attacker", "lb-blue");
  blueC.classList.add("attacker", "c-blue");
  redC.classList.add("defender", "c-red");

  ball.classList.add("dice-ball");
  blueLeftF.classList.add("dice-lf");
  blueRightF.classList.add("dice-rf");
  blueRightB.classList.add("dice-rb");
  blueLeftB.classList.add("dice-lb");
  blueC.classList.add("dice-c");
  pauseAnimation();

  document.querySelector(".pause").classList.remove("selected");
  document.querySelector(".play").classList.remove("selected");
}

function stopFiveDice() {
  ball.classList.remove("dice-ball");
  blueLeftF.classList.remove("dice-lf");
  blueRightF.classList.remove("dice-rf");
  blueRightB.classList.remove("dice-rb");
  blueLeftB.classList.remove("dice-lb");
  blueC.classList.remove("dice-c");
}

function pauseAnimation() {
  document.querySelector(".play").classList.remove("selected");
  document.querySelector(".pause").classList.add("selected");
  ball.classList.add("paused");
  blueLeftF.classList.add("paused");
  blueRightF.classList.add("paused");
  blueRightB.classList.add("paused");
  blueLeftB.classList.add("paused");
  blueC.classList.add("paused");
  redC.classList.add("paused");
}
function resumeAnimation() {
  document.querySelector(".play").classList.add("selected");
  document.querySelector(".pause").classList.remove("selected");

  ball.classList.remove("paused");
  blueLeftF.classList.remove("paused");
  blueRightF.classList.remove("paused");
  blueRightB.classList.remove("paused");
  blueLeftB.classList.remove("paused");
  blueC.classList.remove("paused");
  redC.classList.remove("paused");
}
