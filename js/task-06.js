const input = document.getElementById('validation-input');

input.addEventListener('input', (event) =>{
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.className = 'valid'
    } else {
        input.className = 'invalid'
    }
} )