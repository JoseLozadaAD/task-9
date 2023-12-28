// script.test.js
const { addNumber, clearInput, resolve, operations } = require('./script');

let input;
let operator;
let firstValue;

beforeEach(() => {
  document.body.innerHTML = `
    <div class="calculator__input">0</div>
  `;
  input = document.querySelector('.calculator__input');
  operator = null;
  firstValue = 0;
  global.input = input;
  global.operator = operator;
  global.firstValue = firstValue;
});

describe('addNumber', () => {
  it('should add a number to the input value', () => {
    console.log(
      '------------------------------------------------------------------------',
    );
    console.log(input.innerHTML);
    addNumber('1');
    expect(input.textContent).toBe('1');
  });
});

/* describe('clearInput', () => {
  it('should reset the input value when called with "RESET"', () => {
    clearInput('RESET');
    expect(input.value).toBe('0');
  });
});

describe('resolve', () => {
  it('should set the operator when called with an operation', () => {
    resolve('+');
    expect(global.operator).toBe('+');
  });
});

describe('operations', () => {
  it('should perform the correct operation when called with an operator', () => {
    global.operator = '+';
    global.firstValue = 1;
    input.value = '2';
    operations(null);
    expect(input.value).toBe('3.00');
  });
}); */
