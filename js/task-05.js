


const inputName = document.getElementById('name-input');
const outputName =  document.getElementById('name-output');


inputName.addEventListener('input', (event) => {
    outputName.textContent = event.currentTarget.value;
    console.log(event.currentTarget.value);
  });

  