
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector("#ingredients");


const list = ingredients.map((item) => {
const li = document.createElement('li');
li.className = 'item';
li.innerHTML = item;
return li;
})

mainList.append(...list);



