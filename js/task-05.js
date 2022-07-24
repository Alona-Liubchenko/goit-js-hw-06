const input = document.querySelector("#name-input");
let nameLable = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  nameLable.textContent = event.currentTarget.value;
}
