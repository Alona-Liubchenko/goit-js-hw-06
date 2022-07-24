const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповнені");
  }

  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
