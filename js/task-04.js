const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");
let counterValue = 0;
decrementBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
incrementBtn.addEventListener("click", (event) => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
