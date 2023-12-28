const input = document.querySelector('.calculator__input');
const clearButtons = document.querySelector('.calculator__clear');
const numberButtons = document.querySelector('.calculator__buttons');
const operationButtons = document.querySelector('.calculator__operations');

let firstValue = 0;
let operator = null;
let flag = false;

numberButtons.addEventListener('click', (event) => {
  if (!event.target.closest('button')) return;

  const target = event.target;
  const value = target.textContent;

  if (input.value.includes('.') && value === '.') return;

  if (value === '=') {
    operations(null);
    return;
  }

  if (flag) {
    input.value = value;
    flag = false;
    return;
  }

  input.value === '0' ? (input.value = value) : (input.value += value);
});

clearButtons.addEventListener('click', (event) => {
  if (!event.target.closest('button')) return;

  const value = event.target.textContent.toUpperCase();
  if (value === 'RESET') {
    input.value = firstValue = '0';
    operator = null;
  }

  if (value === 'DEL') {
    input.value.length === 1
      ? (input.value = '0')
      : (input.value = input.value.slice(0, -1));
  }
});

operationButtons.addEventListener('click', (event) => {
  if (!event.target.closest('button')) return;

  const value = event.target.textContent;

  if (!operator) {
    firstValue = Number(input.value);
    operator = value;
    flag = true;
    return;
  }

  operations(value);
});

const operations = (valueOperator) => {
  if (operator) {
    const secondValue = Number(input.value);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
    }

    flag = true;
    operator = valueOperator;
    input.value = firstValue = result.toFixed(4);
  }
};
