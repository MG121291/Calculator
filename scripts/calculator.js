let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function displayCalculation(){
  document.querySelector('.js-calculation-display')
    .innerHTML = `${calculation}`
}

function updateCalculation(number) {
  if (number === '=') {
    calculation = eval(calculation);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  } else {
    calculation += number;
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  }
}

function clearCalculation() {
  calculation = '';
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}