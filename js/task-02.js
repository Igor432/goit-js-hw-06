
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`);
mainList.innerHTML = list;

