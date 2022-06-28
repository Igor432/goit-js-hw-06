const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("все поля должны быть заполнены.");
  } else {
    const data = { email: email.value, password: password.value };
    form.reset();
    console.log(data);
  }
}