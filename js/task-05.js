const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const inputName = () => {
  if (inputEl.value === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputEl.value;
  }
};

inputEl.addEventListener("input", inputName);
