const task1 = require('./task1.js');

test('Testing Sum', () => {
  expect(task1.Sum(2, 3)).toBe(5);
});

test('Testing subtraction', () => {
  expect(task1.Subtract(2, 3)).toBe(-1);
});

test('Testing Multiplication', () => {
  expect(task1.Multiply(2, 3)).toBe(6);
});

test('Testing Division', () => {
  expect(task1.Divide(2, 2)).toBe(1);
});
