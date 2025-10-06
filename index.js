// користувач вводить початкове значеня - число
// потім він вводить знаки або + або -
// ми залежно від цих знаків робимо інкремент або дікремент
// це все продовжуються до того доки користувач не натисне відміну

// let userInputNumber = prompt("Enter Number");

// while (true) {
//   const sign = prompt("Enter + or -");
//   if (sign===null) {
//     break;
//   }
//   sign === "+" ? userInputNumber++ : userInputNumber--;
// }
// console.log(userInputNumber);

// Попроси користувача вводити "так" або "ні", поки не введе "стоп". Порахуйте, скільки було "так" і скільки "ні".

// let countYes = 0;
// let countNo = 0;

// while (true) {
//   const userAnswer = prompt("Enter yes, no or stop");
//   if (userAnswer === "stop") {
//     break;
//   } else if (userAnswer === "yes") {
//     countYes++;
//   } else if (userAnswer === "no") {
//     countNo++;
//   }
// }
// console.log(`Yes - ${countYes}
// No - ${countNo}`);

// 3 -> 9 -> 27
// 4 -> 16
// 5 -> 25
// 6 -> 36
// 7 -> 49
// 8 -> 64
// 9 -> 81

// const min = 1;
// const max = 15;

// for (let i = min; i <= max; i++) {
//   console.log(`${i} -> ${i*i} -> ${i*i*i}`);
// }

// замість чисел кратних 4 виводимо - ***
// заміть чисел кратних 6 виводимо $$$

// 10
// 9
// ***
// 7
// $$$
// 5
// ***
// 3
// 2
// 1

// for (let i = 10; i > 0; i--) {
//   if (i % 4 === 0) {
//     console.log("***");
//     continue;
//   }
//   if (i % 6 === 0) {
//     console.log("$$$");
//     continue;
//   }
//   console.log(i);
// }

// просимо користувача ввести 5 чисел, якщо він вводить число 7, то припиняємо просити завчасно
// введіть 1 число
// введіть 2 число

// for (let i = 0; i < 5; i++) {
//   const userNumbner1 = prompt(`Enter ${i + 1} -`);
//   if (Number(userNumbner1) === 7) {
//     break;
//   }
// }

// Телефон коштує 30 000 грн. Щотижня ти відкладаєш 2 500 грн.
// Порахуй і виведи:

// повідомлення після кожного тижня: "Тиждень X: збережено Y грн";

// після накопичення потрібної суми — "Грошей достатньо! Потрібно X тижнів."

const phonePrice =30000;
const weekSumma =2500;
let countWeek = 0;
let summa = 0;


while (summa<phonePrice) {
  countWeek++;
  summa += weekSumma;
  console.log(`Тиждень ${countWeek}: збережено ${summa} грн`);
  // if(summa>=phonePrice) {
  //   break
  // }
}
console.log(`Грошей достатньо! Потрібно ${countWeek} тижнів.`);
