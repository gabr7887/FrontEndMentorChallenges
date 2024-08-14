// const form = document.forms[0];
// const inputs = document.querySelectorAll('data-inputs');
// function validarInputs() {
//   let validade = false;
//   if (inputs) {
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i].value.length > 0) {
//         validade = true;
//       } else {
//         inputs[i].parentNode.classList.add('error-state');
//         validade = false;
//         break;
//       }
//     }
//   }
//   return validade;
// }

const form = document.forms[0];
const inputs = document.querySelectorAll('[data-input]');
const sucessoDiv = document.querySelector('.response-div');
const errorDiv = document.querySelector('.response-error-div');
function validarInputs() {
  let validade = false;
  if (inputs) {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checkValidity()) {
        console.log('aconteceu true');
        validade = true;
      } else {
        console.log('aconteceu false');

        inputs[i].parentNode.classList.add('error-state');
        validade = false;
        break;
      }
    }
  }
  return validade;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validarInputs()) {
    sucessoDiv.classList.add('active');
    setTimeout(() => {
      sucessoDiv.classList.remove('active');
    }, 3000);
  } else {
    errorDiv.classList.add('active');
    setTimeout(() => {
      errorDiv.classList.remove('active');
    }, 3000);
  }
});
