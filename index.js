// function to returning the length of a string
function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  throw new Error("The string's length should be between 1-10 characters");
}

// function to reverse a string
function reverseString(string) {
  return string.split("").reverse().join("");
}

// simple calculator
class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  add() {
    return this.firstNumber + this.secondNumber;
  }

  substract() {
    return this.firstNumber - this.secondNumber;
  }

  multiply() {
    return this.firstNumber * this.secondNumber;
  }

  divide() {
    return this.firstNumber / this.secondNumber;
  }
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.Calculator = Calculator;
exports.capitalize = capitalize;
