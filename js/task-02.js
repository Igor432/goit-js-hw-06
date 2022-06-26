

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector("#ingredients");

const list = ingredients.forEach((name) =>
{
const item = document.createElement("li");
item.textContent = name;
mainList.append(item);
item.className = "item";
}
)



/*
MAP

const list = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`);
mainList.innerHTML = list;
*/

