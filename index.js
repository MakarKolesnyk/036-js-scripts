const userInput1 = prompt("Enter first number");
const userInput2 = prompt("Enter second number");

const number1 = Number(userInput1);
const number2 = Number(userInput2);

const operator = prompt(" Enter operator +,  -,  *,  /, %");

switch (operator) {
  case "+": {
    const result = number1 + number2;
    alert(number1 + "+" + number2 + "=" + result);
    break;
  }
  case "-": {
    const result = number1 - number2;
    alert(number1 + "-" + number2 + "=" + result);
    break;
  }
  case "*": {
    const result = number1 * number2;
    alert(number1 + "*" + number2 + "=" + result);
    break;
  }
  case "/": {
    const result = number1 / number2;
    alert(number1 + "/" + number2 + "=" + result);
    break;
  }
  case "%": {
    const result = number1 % number2;
    alert(number1 + "%" + number2 + "=" + result);
    break;
  }
  default:
    break;
}

// const userInputDayOfWeek = `Write day of week:
// For 1 to 7`;

// const dayOfWeek = prompt(userInputDayOfWeek);

// switch (dayOfWeek) {
//   case "1":
//   case "2":
//   case "3":
//   case "4":
//   case "5":
//     alert("workday");
//   case "6":
//   case "7":
//     alert("Weekend");
//     break;
//   default:
//     alert("There is not day of week");
//     break;
// }
