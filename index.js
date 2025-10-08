// /**
//  * get area of sqaure
//  * @param {number} side defoult = 0
//  * @returns {number}
//  */
// function getAreaSquare(side = 0) {
//   const getArea = side * side;
//   return getArea;
// }

// const area = getAreaSquare(5);
// console.log(area);

// /**
//  * get summa diapozan of numbers
//  * @param {number} start defoult = 0
//  * @param {number} end defoult = 0
//  * @returns {number}
//  */
// function getSummaDiapazon(start = 0, end = 0) {
//   let summa = 0;
//   for (let i = start; i < end; i++) {
//     summa += i;
//   }
//   return summa;
// }

// const result =getSummaDiapazon(1, 5);
// console.log(result);

// /**
//  * get sing from number posetive, negative or zero
//  * @param {number} number defoult = 0
//  * @returns {string}
//  */
// function getSignNumber(number=0) {
//   if (number > 0) {
//     return "posetive";
//   }
//   if (number < 0) {
//     return "negative";
//   }
//   return "zero";
// }

// console.log(getSignNumber(1));
// console.log(getSignNumber(-1));
// console.log(getSignNumber(0));

// /**
//  * get number and say even or odd
//  * @param {Number} number defoult 0
//  * @returns {string}
//  */
// function getEvenOrOdd1(number = 0) {
//   if (number % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// function getEvenOrOdd2(number) {
//   return number % 2 === 0 ? "even" : "odd";
// }

// console.log(getEvenOrOdd1(8));
// console.log(getEvenOrOdd2(7));

// /**
//  * get two number and back big
//  * @param {number1} number1
//  * @param {number} number2
//  * @returns {string}
//  */
// function getTwoNumbersBackBig(number1, number2) {
//   if (number1 > number2) {
//     return `${number1} bigger`;
//   }
//   if (number1 < number2) {
//     return `${number2} bigger`;
//   }
//   return number1;
// }

// console.log(getTwoNumbersBackBig(1, 4));
// console.log(getTwoNumbersBackBig(5, 1));
// console.log(getTwoNumbersBackBig(3, 3));

// function getTwoNumbersBackBig(number1, number2) {
//   return number1 >= number2 ? number1 : number2
// }

// console.log(getTwoNumbersBackBig(1, 300));
// console.log(getTwoNumbersBackBig(400, 300));
// console.log(getTwoNumbersBackBig(1, 1));

/**
 * get three number and back smaller
 * @param {number} number1 
 * @param {number} number2 
 * @param {number} number3 
 * @returns string
 */
function getThreeNumberBackSmall (number1, number2, number3) {
  if(number1 <= number2 || number1 <= number3) {
    return `${number1} smaller`
  }
  if (number2 < number1 || number2 < number3) {
    return `${number2} smaller`
  }
 return `${number3} smaller`
}

console.log(getThreeNumberBackSmall(1, 2 ,3));
console.log(getThreeNumberBackSmall(2, 3 ,4));
console.log(getThreeNumberBackSmall(3, 4 ,5));
console.log(getThreeNumberBackSmall(4, 4 ,4));
