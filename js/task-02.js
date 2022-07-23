const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsLiEl = document.querySelector("#ingredients");
const makeIngredientsLiEl = (names) => {
  return names.map((name) => {
    const liEl = document.createElement("li");
    liEl.textContent = name;
    liEl.classList = "item";

    return liEl;
  });
};
const elements = makeIngredientsLiEl(ingredients);
ingredientsLiEl.append(...elements);
