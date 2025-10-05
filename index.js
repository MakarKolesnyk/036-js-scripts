// let i = 5;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 10; i < 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// const start = 1;
// const end = 5;

// let summa = 0;
// for (let i = start; i < end; i++) {
//   // console.log(i);
//   summa += i;
//   //  console.log(summa);
// }
//   console.log('summa =', summa);

// let mult =1;
// for (let i =start; i < end; i++) {
//   mult *=i;
// }
//   console.log('mult =', mult);

// const start = 0;
// const end = 10;

// let mult = 1;
// let summa = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     summa += i;
//     console.log(i);
//   } else {
//     mult *= i;
//   }
// }
// console.log("summa =", summa);
// console.log("mult = ", mult);

// const password = "qwe123";
// const maxTry = 3;

const password = "qwe123";
const maxTry = 3;

for (let i = 0; i < maxTry; i++) {
  const userInputPassword = prompt("Введите пароль");

  if (userInputPassword === password) {
    alert("Добро пожаловать!");
    break; 
  } else {
    const triesLeft = maxTry - i - 1;

    if (triesLeft > 0) {
      alert("Неверный пароль! Осталось попыток: " + triesLeft);
    } else {
      alert("Пароль не работает. Доступ запрещён.");
    }
  }
}
