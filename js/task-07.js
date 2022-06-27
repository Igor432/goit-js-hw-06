const polzunok = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

polzunok.addEventListener( 'change', (event) => {
span.style.fontSize = event.currentTarget.value + "px";
console.log(event.currentTarget.value);
})