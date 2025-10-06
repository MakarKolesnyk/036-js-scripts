const number1 = 1;
const number2 = 7;
const result = number1 * number2;

while (true) {
  const userInput = prompt(`how much will it be
    ${number1} * ${number2} ?`);
  if (userInput === null || userInput.trim()==='') {
    alert("Dont cancel");
    continue;
    alert("After continue") // this row will not work
  }
  if (Number(userInput === result)) {
    alert("Win answer = " + result);
    break;
  }
  alert("Try more")
}
