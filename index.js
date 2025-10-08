// function logSqareNumber (num) {
//   console.log(num*num);
// }

// logSqareNumber(2)
// logSqareNumber(5)

// function logNumbersDiapazon (start, end) {
// for(let i = start; i<end; i++) {
//   console.log(i);
// }
// }

// logNumbersDiapazon(1, 5)

/**
 * draw multiple times thing
 * @param {Number} times default value 1
 * @param {string} picture default value ':)'
 */
function logDrawsThings(times=1, picture=":)") {
  for (let i = 1; i <= times; i++) {
    console.log(i, picture);
  }
}
logDrawsThings(5, "=^.^=");
logDrawsThings(5);
logDrawsThings(undefined,"=^.^=");
logDrawsThings();
