var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operation = document.getElementById("operation");
var range = document.getElementById("range");
var result = document.getElementById("result");

function calculate() {
  var value1 = parseFloat(num1.value);
  var value2 = parseFloat(num2.value);
  var selectedOperation = operation.value;
  var rangeValue = parseInt(range.value);

  var computedResult;

  switch (selectedOperation) {
    case "add":
      computedResult = value1 + value2 + rangeValue;
      break;
    case "subtract":
      computedResult = value1 - value2 - rangeValue;
      break;
    case "multiply":
      computedResult = value1 * value2 * rangeValue;
      break;
    case "divide":
      computedResult = value1 / value2 / rangeValue;
      break;
    default:
      computedResult = "Invalid operation";
  }

  result.innerHTML = "Result: " + computedResult;
}
