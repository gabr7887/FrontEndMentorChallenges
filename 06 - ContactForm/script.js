const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const firstName = document.getElementById('firstName');
const valores = {
  firstName,
};

firstName.oninput = valores.firstName = firstName.value;
form.onsubmit = inputs.forEach((input) => {
  console.log(input.name, input.value);
  console.log(inputs);
  console.log(firstName.value);
  console.log(valores);
});
