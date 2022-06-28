
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainList = document.querySelector("#ingredients");
;


const list = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`);
mainList.innerHTML = list;




/*
const list = ingredients.map((item) =>{
const li = document.createElement('li');
li.innerHTML = item;
li.className = item;
mainList.append(li);
})
*/




