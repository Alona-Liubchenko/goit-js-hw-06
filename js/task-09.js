function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBody = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const newColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChengeColorBtn);

function onChengeColorBtn() {
  let color = getRandomHexColor();
  colorBody.style.backgroundColor = color;
  newColor.textContent = color;
}
