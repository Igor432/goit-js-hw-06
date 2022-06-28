const polzunok = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

span.style.fontSize = polzunok.value + "px";

console.log(polzunok.value);

polzunok.addEventListener( 'input', (event) => {

span.style.fontSize = event.currentTarget.value + "px";
console.log(event.currentTarget.value);
polzunok.preventDefault();

})