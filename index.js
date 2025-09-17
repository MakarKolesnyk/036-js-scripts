// false
// undefiend
// null
// '' "" ``
// 0 +0 -0
// NaN

// const userAgeInput = prompt("Enter your age")
// const userAge= Number(userAgeInput);
// const startSchoolAge = 6;
// const endSchoolAge = 17;

// if (userAge>=startSchoolAge && userAge<=ndSchoolAge) {
//  alert('school age')
// } else {
//   alert("Not school age")
// }

// const userNumberInput = prompt("Enter Number");
// const userNumber = Number(userNumberInput);
// const remainder3 = userNumber%3;
// const remainder7 = userNumber%7;

// if (remainder3 === 0 && remainder7 === 0) {
//   alert("You WIN");
// } else {
//   alert("You LOSE");
// }

const userInput = prompt("Enter hours");
console.log(userInput);
const userNumber = Number(userInput); // NaN
console.log(userNumber);

// user enter cancel
const error1 = (userInput = null);
// user send empty string
const error2 = userInput === "";
// user write letters instead of numbers
const error3 = Number.isNan(userNumber) === true;

if (error1 || error2 || error3) {
  alert("Error.\n" + userInput + "- not a number");
} else {
  if (userNumber >= 0 && userNumber <= 23) {
    alert("thanks");
  } else {
    alert("Error.\n" + userInput + " - not a hours");
  }
}
