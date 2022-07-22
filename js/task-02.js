const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");
console.log(navEl);

const navItemEl = document.createElement("li");
navItemEl.classList.add("item");
const textEl = ingredients.reduce((value, name) => {
  value.push(...name);
}, 0);
navItemEl.textContent(textEl);

navEl.append(...navItemEl);
