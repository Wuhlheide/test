let display = document.getElementById("display");
let operator = "";
let operand1 = "";
let operand2 = "";

function displayNum(num) {
  display.value += num;
}

function displayOp(op) {
  operator = op;
  operand1 = display.value;
  display.value = "";
}

function calculate() {
  operand2 = display.value;
  let result = 0;
  switch (operator) {
    case "+":
      result = parseInt(operand1) + parseInt(operand2);
      break;
    case "-":
      result = parseInt(operand1) - parseInt(operand2);
      break;
    case "*":
      result = parseInt(operand1) * parseInt(operand2);
      break;
    case "/":
      result = parseInt(operand1) / parseInt(operand2);
      break;
  }
  display.value = result;
  operand1 = "";
  operand2 = "";
  operator = "";
}

function clearDisplay() {
  display.value = "";
  operand1 = "";
  operand2 = "";
  operator = "";
}
