


const inputName = document.getElementById('name-input');
const outputName =  document.getElementById('name-output');


inputName.addEventListener('input', (event) => {
    outputName.textContent = event.currentTarget.value;
    if (inputName.value === "") {
      outputName.textContent = 'anonymous';
    }
    console.log(event.currentTarget.value);
  });

  