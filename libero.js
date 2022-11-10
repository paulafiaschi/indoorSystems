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

document.querySelector(".startLibLeft").addEventListener("click", startLiberoLeft);
document.querySelector(".startLibRight").addEventListener("click", startLiberoRight);
document.querySelector(".startLibLeft").addEventListener("animationend", stopLibero);
document.querySelector(".stopLibLeft").addEventListener("click", stopLibero);
document.querySelector(".pause").addEventListener("click", pauseAnimation);
document.querySelector(".play").addEventListener("click", resumeAnimation);

function startLiberoLeft() {
  ball.classList = "";
  blueLeftF.classList = "";
  blueRightF.classList = "";
  blueRightB.classList = "";
  blueLeftB.classList = "";
  blueC.classList = "";
  redC.classList = "";

  this.offsetHeight;

  ball.classList.add("ball");
  blueLeftF.classList.add("attacker", "lf-blue");
  blueRightF.classList.add("attacker", "rf-blue");
  blueRightB.classList.add("attacker", "rb-blue");
  blueLeftB.classList.add("attacker", "lb-blue");
  blueC.classList.add("attacker", "c-blue");
  redC.classList.add("defender", "c-red");

  this.offsetHeight;
  ball.classList.add("lib1-ball");
  blueLeftF.classList.add("lib1-lf");
  blueRightF.classList.add("lib1-rf");
  blueRightB.classList.add("lib1-rb");
  blueLeftB.classList.add("lib1-lb");
  blueC.classList.add("lib1-c");
  redC.classList.add("lib1-rc");
  pauseAnimation();
}

function startLiberoRight() {
  ball.classList = "";
  blueLeftF.classList = "";
  blueRightF.classList = "";
  blueRightB.classList = "";
  blueLeftB.classList = "";
  blueC.classList = "";
  redC.classList = "";

  this.offsetHeight;

  ball.classList.add("ball", "right-ball");
  blueLeftF.classList.add("attacker", "right-lf-blue");
  blueRightF.classList.add("attacker", "right-rf-blue");
  blueRightB.classList.add("attacker", "right-rb-blue");
  blueLeftB.classList.add("attacker", "right-lb-blue");
  blueC.classList.add("attacker", "right-c-blue");
  redC.classList.add("defender", "c-red");

  pauseAnimation();

  ball.classList.add("lib2-ball");
  blueLeftF.classList.add("lib2-lf");
  blueRightF.classList.add("lib2-rf");
  blueRightB.classList.add("lib2-rb");
  blueLeftB.classList.add("lib2-lb");
  blueC.classList.add("lib2-c");
  redC.classList.add("lib2-rc");
}

function stopLibero() {
  ball.classList = "";
  blueLeftF.classList = "";
  blueRightF.classList = "";
  blueRightB.classList = "";
  blueLeftB.classList = "";
  blueC.classList = "";
  redC.classList = "";

  this.offsetHeight;

  ball.classList.add("ball");
  blueLeftF.classList.add("attacker", "lf-blue");
  blueRightF.classList.add("attacker", "rf-blue");
  blueRightB.classList.add("attacker", "rb-blue");
  blueLeftB.classList.add("attacker", "lb-blue");
  blueC.classList.add("attacker", "c-blue");
  redC.classList.add("defender", "c-red");
  startLiberoLeft();
}

function pauseAnimation() {
  ball.classList.add("paused");
  blueLeftF.classList.add("paused");
  blueRightF.classList.add("paused");
  blueRightB.classList.add("paused");
  blueLeftB.classList.add("paused");
  blueC.classList.add("paused");
  redC.classList.add("paused");
}
function resumeAnimation() {
  ball.classList.remove("paused");
  blueLeftF.classList.remove("paused");
  blueRightF.classList.remove("paused");
  blueRightB.classList.remove("paused");
  blueLeftB.classList.remove("paused");
  blueC.classList.remove("paused");
  redC.classList.remove("paused");
}
