const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navEl = document.querySelector("#ingredients");

const elements = navEl.map((element) => {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
});

navEl.append(navItemEl);
