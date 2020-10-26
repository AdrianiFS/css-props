let propsToCompare = [];
let eventButton;
let button = document.getElementById("buttonGame");
let timerPar = document.getElementById("timerPar");
let scoreRender = document.getElementById("scoreRender");
let buttonRestartGame = document.getElementById("buttonRestartGame");
let startGame = document.getElementById("startGame");
let resultsContainer = document.querySelector(".resultsContainer");
const inputGame = document.getElementById("inputGame");
var tempo = true;
const startingMinutes = 3;
let time = startingMinutes * 60;
let starter = false;
inputGame.style.display = "none";
// ********************************************************************************
startGame.addEventListener("click", (e) => {
  e.preventDefault();
  resultsContainer.style.display = "flex";
  timerPar.style.display = "block";
  button.style.display = "block";
  startGame.style.display = "none";
  buttonGame.disabled = false;
  startGame.disabled = true;
  inputGame.style.display = "block";
  starter = true;
});
// ********************************************************************************
let updateCountdown = (tempo) => {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerPar.innerHTML = `<p>You have <span id="countdown">${minutes}:${seconds}</span> minutes </p>`;
  if (starter === true) {
    time !== 0 ? time-- : time;
  }
  if (seconds <= 0 && minutes <= 0) {
    tempo = false;
    buttonRestartGame.style.display = "block";
    // window.clearInterval(timer);
    button.disabled = true;
  }
  managingTempo(tempo);
  return tempo;
};
setInterval(updateCountdown, 1000);
// ********************************************************************************
const managingTempo = (tempo) => {
  if (tempo === false && propsToCompare.length < 20) {
    scoreRender.style.display = "flex";
    buttonRestartGame.style.display = "block";
    scoreRender.innerHTML = `<p class ="renderScore">Your score is ${propsToCompare.length}. You suck !</p>`;
  }
  if (tempo === false && propsToCompare.length >= 20) {
    scoreRender.style.display = "flex";
    buttonRestartGame.style.display = "block";
    scoreRender.innerHTML = `<p class ="renderScore">Your score is ${propsToCompare.length}. You can get better !</p>`;
  }
  if (tempo === false && propsToCompare.length >= 35) {
    scoreRender.style.display = "flex";
    buttonRestartGame.style.display = "block";
    scoreRender.innerHTML = `<p class ="renderScore">Your score is ${propsToCompare.length}. Good job !</p>`;
  }
  if (tempo === false && propsToCompare.length >= 45) {
    scoreRender.style.display = "flex";
    buttonRestartGame.style.display = "block";
    scoreRender.innerHTML = `<p class ="renderScore">Your score is ${propsToCompare.length}. You are a pro !</p>`;
  }
};
// ********************************************************************************
let testForm = () => {
  let input = document.getElementById("inputGame");
  let res = "";
  eventButton = button.addEventListener("click", (e) => {
    e.preventDefault();
    let results = cssProperties.filter((el) => el === input.value);
    cssProperties = cssProperties.filter((el) => el !== results[0]);
    results.forEach((el) => {
      res += `<p>${el}&#10003;</p>`;
      propsToCompare.push(el);
    });
    if (input.value) {
      resultsContainer.innerHTML = res;
      input.value = "";
    }
  });
};
testForm();
