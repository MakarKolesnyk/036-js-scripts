// const start = 15;
// const end = 25;

// for (let i = start; i < end; i++) {
//   if (i % 4 === 0 && i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// const start = 1;
// const end = 10;

// let summa = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0 || i % 3 === 0) {
//     continue;
//   }
//   summa += i;
// }

// console.log('summa =', summa);

// const number = 5;
// for(let i = 1; i<=10; i++) {
//   console.log(`${number}*${i}=${number*i}`);
// }

for (let num1 = 1; num1 <= 10; num1++) {
  console.group(num1);
  for (let num2 = 1; num2 <= 10; num2++) {
    console.log(`${num1} *${num2}=${num1 * num2}`);
  }
  console.groupEnd;
}
