const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputName = () => {
  if (inputEl.value === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputEl.value;
  }
};

inputEl.addEventListener("input", onInputName);
