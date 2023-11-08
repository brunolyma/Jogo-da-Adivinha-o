let hitsNumber = 0;
const randomNumber = Math.round(Math.random() * 10);

function handleClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("input");
  const smallText = document.getElementById("wrongNumber");

  hitsNumber++;
  if (Number(inputNumber.value) > 10) {
    smallText.style.visibility = "visible";
    smallText.innerText = "Use números de 0 a 10";
    hitsNumber--;
  }
  if (inputNumber.value == randomNumber) {
    rightChoice(hitsNumber);
  } else {
    inputNumber.value = "";
    smallText.style.visibility = "visible";
    smallText.innerText = "Quase! Tente outro número";
  }
  console.log(randomNumber);
}

function rightChoice(hits) {
  const screen1 = document.querySelector("div.screen1");
  const screen2 = document.querySelector("div.screen2");
  const spanHits = document.querySelector("span");

  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  spanHits.innerText = hits;
}

function newGame() {
  window.location.reload();
}
