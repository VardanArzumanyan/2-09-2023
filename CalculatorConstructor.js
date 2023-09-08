function Calculate() {}
Calculate.prototype.add = function (num1, num2) {
  console.log(num1 + num2);
};
Calculate.prototype.subtract = function (num1, num2) {
  console.log(num1 - num2);
};
Calculate.prototype.multiply = function (num1, num2) {
  console.log(num1 * num2);
};
Calculate.prototype.divide = function (num1, num2) {
  console.log(num1 / num2);
};

let calculator = new Calculate();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
