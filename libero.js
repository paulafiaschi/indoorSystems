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

document.querySelector(".startLib").addEventListener("click", startLibero);
document.querySelector(".stopLib").addEventListener("click", stopLibero);

function startLibero() {
  ball.classList.add("lib-ball");
  blueLeftF.classList.add("lib-lf");
  blueRightF.classList.add("lib-rf");
  blueRightB.classList.add("lib-rb");
  blueLeftB.classList.add("lib-lb");
  blueC.classList.add("lib-c");
  redC.classList.add("lib-rc");
}

function stopLibero() {
  ball.classList.remove("lib-ball");
  blueLeftF.classList.remove("lib-lf");
  blueRightF.classList.remove("lib-rf");
  blueRightB.classList.remove("lib-rb");
  blueLeftB.classList.remove("lib-lb");
  blueC.classList.remove("lib-c");
  redC.classList.remove("lib-rc");
}
