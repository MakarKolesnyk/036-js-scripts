// while (true) {
//   const userNumberInput = prompt("Enter number 77");
//   if (userNumberInput === "77") {
//     alert("thanks");
//     break;
//   }
// }

// while (true) {
//   const userNumberInput = prompt("Enter number multiply 7");
//   const userNumber = Number(userNumberInput)
//   if (userNumber % 7 === 0 && userNumberInput!=='' && userNumberInput!==null) {
//     alert("thanks");
//     break;
//   }
// }

// while (true) {
//   const userNumberInput = prompt("Enter number multiply 0");
//   if (userNumber === '0') {
//     alert("thanks");
//     break;
//   }
// }

// while (true) {
//   const userInput = prompt("Enter something");
//   if (userInput) {
//     alert("thanks");
//     break;
//   }
// }

const secterNumber = 4;

while (true) {
  const userInput = prompt("Enter number");
  const userNumber = Number(userInput);

  if (userInput.trim()=== "" || userInput === null || Number.isNaN(userNumber)) {
    alert("error");
  } else if (userNumber === secterNumber) {
    alert("you win!");
    break;
  } else if (userInput === "" || userInput === null) {
    alert("error");
  } else if (userNumber > secterNumber) {
    alert("Secret number less");
  } else {
    alert("Secret Number bigger");
  }
}
