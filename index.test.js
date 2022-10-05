const { stringLength, reverseString, Calculator } = require("./index.js");

// test for the string length function
test("Properly returns the number of characters in a string", () => {
  const greet = "Hello";
  expect(stringLength(greet)).toBe(5);
});

// test for the reverse string function
test("Properly reverse a string", () => {
  const greet = "hello";
  expect(reverseString(greet)).toBe("olleh");
});

// test for addition operation
describe("calculator add operation", () => {
  const calculate = new Calculator(5, 98);

  test("Properly adds two numbers", () => {
    expect(calculate.add()).toBe(103);
  });

  test("Is greater than zero", () => {
    expect(calculate.add()).toBeGreaterThan(0);
  });

  test("Is not null", () => {
    expect(calculate.add()).not.toBeNull();
  });
});

// Test for substraction operation
describe("calculator substract operation", () => {
  const calculate = new Calculator(45, 60);

  test("Is smaller than zero", () => {
    expect(calculate.substract()).toBeLessThan(0);
  });

  test("Properly substracts two numbers", () => {
    expect(calculate.substract()).toBe(-15);
  });

  test("Is not null", () => {
    expect(calculate.substract()).not.toBeNull();
  });
});

// tests for dividion operation
describe("calculator divide operations ", () => {
  const calculate = new Calculator(20, 4);

  test("Properly divides two numbers", () => {
    expect(calculate.divide()).toBe(5);
  });

  test("Returns a defined value", () => {
    expect(calculate.divide()).toBeDefined();
  });

  test("Is not false", () => {
    expect(calculate.divide()).not.toBeFalsy();
  });
});

// tests for multiplication operation
describe("calculator divide operations ", () => {
  const calculate = new Calculator(2, 4);

  test("Properly multiplies two numbers", () => {
    expect(calculate.multiply()).toBe(8);
  });

  test("Returns a defined value", () => {
    expect(calculate.multiply()).toBeDefined();
  });

  test("Is true", () => {
    expect(calculate.multiply()).toBeTruthy();
  });
});
