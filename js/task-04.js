let counterValue = 0;
let valueSpan = document.querySelector('#value');



const incrementBut = document.querySelector('button[data-action="increment"]');
const decrementBut = document.querySelector('button[data-action="decrement"]');


incrementBut.addEventListener("click", () => {
    counterValue++;
    valueSpan.innerHTML = counterValue;
  });

  decrementBut.addEventListener("click", () => {
    counterValue--;
    valueSpan.innerHTML = counterValue;
  });

  console.log(counterValue);