function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", onCreateClick);
destroyBtnEl.addEventListener("click", onDestroyClick);

function onCreateClick() {
  deleteBoxes();
  createBoxes(inputEl.value);
}

function onDestroyClick() {
  inputEl.value = "";
  deleteBoxes();
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    const size = 30;
    const divSizes = size + i * 10;
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${divSizes}px`;
    div.style.height = `${divSizes}px`;
    div.style.border = "2px solid black";
    div.style.marginTop = "10px";
    divBoxesEl.append(div);
  }
}

function deleteBoxes() {
  divBoxesEl.innerHTML = "";
}
