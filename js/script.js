const input = document.querySelector('.calculator__input');

let firstValue = 0;
let operator = null;
let flag = false;

const addNumber = (value) => {
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
};

const clearInput = (value) => {
  if (value === 'RESET') {
    input.value = firstValue = '0';
    operator = null;
  }

  if (value === 'DEL') {
    input.value.length === 1
      ? (input.value = '0')
      : (input.value = input.value.slice(0, -1));
  }
};

const resolve = (operation) => {
  if (!operator) {
    firstValue = Number(input.value);
    operator = operation;
    flag = true;
    return;
  }

  operations(operation);
};

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
    input.value = firstValue = result.toFixed(2);
  }
};

module.exports = { addNumber, clearInput, resolve, operations };
