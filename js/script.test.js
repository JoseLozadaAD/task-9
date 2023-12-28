describe('addNumber', () => {
  let input;
  let script;

  beforeAll(() => {
    input = { value: '0' };
    document.querySelector = jest.fn().mockReturnValue(input);
    script = require('./script');
  });

  it('should add a number to the input value', () => {
    script.addNumber('1');
    expect(input.value).toBe('1');
  });

  it('should add a decimal to the input value', () => {
    script.addNumber('.');
    expect(input.value).toBe('1.');
  });

  it("shouldn't add a decimal to the input value", () => {
    script.addNumber('.');
    expect(input.value).toBe('1.');
  });

  it('should concat a new number to the input value', () => {
    script.addNumber('5');
    expect(input.value).toBe('1.5');
  });

  it('should DEL the input value', () => {
    script.clearInput('DEL');
    expect(input.value).toBe('1.');
  });

  it('should RESET the input value', () => {
    script.clearInput('RESET');
    expect(input.value).toBe('0');
  });

  it('should DEL the input value with 1 length', () => {
    script.clearInput('DEL');
    expect(input.value).toBe('0');
  });

  it('should send the add operation', () => {
    script.addNumber('5');
    script.resolve('+');
    script.addNumber('7');
    expect(input.value).toBe('7');
  });

  it('should resolve the operation', () => {
    script.addNumber('=');
    expect(input.value).toBe('12.00');
  });

  it('should send two operations', () => {
    script.clearInput('RESET');
    script.addNumber('5');
    script.resolve('+');
    script.addNumber('7');
    script.resolve('-');
    expect(input.value).toBe('12.00');
  });

  it('should send subtract operation', () => {
    script.clearInput('RESET');
    script.addNumber('10');
    script.resolve('-');
    script.addNumber('5');
    script.addNumber('=');
    expect(input.value).toBe('5.00');
  });

  it('should send multiply operation', () => {
    script.clearInput('RESET');
    script.addNumber('10');
    script.resolve('*');
    script.addNumber('5');
    script.addNumber('=');
    expect(input.value).toBe('50.00');
  });

  it('should send divide operation', () => {
    script.clearInput('RESET');
    script.addNumber('10');
    script.resolve('/');
    script.addNumber('5');
    script.addNumber('=');
    expect(input.value).toBe('2.00');
  });
});
