const ulEl = document.querySelectorAll(".item");
const numberOfUlEl = ulEl.length;
console.log(`Number of categories: ${numberOfUlEl}`);

const mainUl = ulEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
