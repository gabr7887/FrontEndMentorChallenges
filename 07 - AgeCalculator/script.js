const atualDate = new Date();
const ano = document.getElementById('year');
const mes = document.getElementById('month');
const dia = document.getElementById('day');
const yearResult = document.getElementById('yearsResults');
const monthResult = document.getElementById('monthsResults');
const dayResult = document.getElementById('daysResults');
const form = document.forms[0];
let errorState = false;
const dataFornecida = {
  ano,
  mes,
  dia,
};

function validarAno(event) {
  if (!event.target.value.length) {
    event.target.parentNode.classList.add('errorState');
    event.target.nextElementSibling.innerText = 'this field is required!';
    errorState = true;
    return false;
  } else if (+event.target.value >= atualDate.getFullYear()) {
    event.target.parentNode.classList.add('errorState');
    event.target.nextElementSibling.innerText = 'Must be in the past!';
    errorState = true;
    return false;
  } else {
    event.target.parentNode.classList.remove('errorState');
    errorState = false;
    return true;
  }
}

function verificarAno(event) {
  if (validarAno(event)) {
    dataFornecida.ano = +event.target.value;
    console.log(dataFornecida.ano);
  }
}

function validarMes(event) {
  if (!event.target.value.length) {
    event.target.parentNode.classList.add('errorState');
    event.target.nextElementSibling.innerText = 'this field is required!';
    errorState = true;
    return false;
  } else if (+event.target.value < 1 || +event.target.value > 12) {
    event.target.parentNode.classList.add('errorState');
    event.target.nextElementSibling.innerText = 'Must be a valid month!';
    errorState = true;
    return false;
  } else {
    event.target.parentNode.classList.remove('errorState');
    errorState = false;
    return true;
  }
}

function verificarMes(event) {
  if (validarMes(event)) {
    dataFornecida.mes = +event.target.value;
  }
}

function validarDia(event) {
  if (!event.target.value.length) {
    event.target.parentNode.classList.add('errorState');
    event.target.nextElementSibling.innerText = 'this field is required!';
    errorState = true;
    return false;
  } else if (+event.target.value < 1 || +event.target.value > 31) {
    event.target.parentNode.classList.add('errorState');
    event.target.nextElementSibling.innerText = 'Must be a valid day!';
    errorState = true;
    return false;
  } else {
    event.target.parentNode.classList.remove('errorState');
    errorState = false;
    return true;
  }
}

function verificarDia(event) {
  if (validarDia(event)) {
    dataFornecida.dia = +event.target.value;
    console.log(dataFornecida.dia);
  }
}

ano.addEventListener('blur', verificarAno);
dia.addEventListener('blur', verificarDia);
mes.addEventListener('blur', verificarMes);

function onSubmit(event) {
  event.preventDefault();
  if (errorState === false) {
    const datePassada = new Date(
      `${dataFornecida.ano}-${dataFornecida.mes}-${dataFornecida.dia} 00:00:00`,
    );
    const calculo = Math.abs(datePassada.getTime() - atualDate.getTime());
    const dateTest = new Date(atualDate.getTime() - calculo);

    const dias = Math.floor(calculo / (1000 * 60 * 60 * 24));
    const ano = Math.floor(dias / 365);
    const mes = (dias % ano) / 12;
    const diasfim = ((dias % 365) % 12) / 31;

    console.log(ano, mes, diasfim);
    console.log(dias / ano);
  }
}

form.addEventListener('submit', onSubmit);
//Must be a valid day!
//Must be a valid month!
//Must be in the past!
//this field is required!
