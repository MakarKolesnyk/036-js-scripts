// функція яка переводить кілометри в метри

// function getMetrFromKm(km) {
//   return km * 1000;
// }

// console.log(getMetrFromKm(5));

// функція приймає три числа і повертає true якщо всі три числа однакові,  інакше - false

// function isThreeNumEqual (number1, number2, number3) {
//   return number1===number2 && number1===number3;
// }

// console.log(isThreeNumEqual(1, 2, 1));

// функція приймає номер дня тижня і повертає слово
// weekend - якщо 6 або 7
// workday - в усіх інших випадках

// function getNameOfWeek (number) {
//   return number > 5 ? 'weekend' : 'workday';
// }

// console.log(getNameOfWeek(3));

// Функція, яка за оцінкою повертає текст: "Погано", "Нормально", "Добре", "Відмінно"
// "Невірні данні

// function getNameGrade(grade) {
//   if (grade <= 0 || grade > 12) {
//     return "Невірні данні";
//   }
//   if (grade <= 4) {
//     return "Погано"
//   }
//   if (grade <=7) {
//     return "Нормально"
//   }
//   if (grade <10) {
//     return "Добре"
//   }
//   return "Відмінно"
// }

// console.log(getNameGrade(12));

// функція приймає фунти, повертає кілограми
// 1 фунт = 0.45359237 kg

// function getKgFromPound (pound, ONE_POUND=0.45359237) {
//   return pound * ONE_POUND
// }

// console.log(getKgFromPound(10, 0.45));

// function getPoundFromKg (kg, ONE_POUND=0.45359237) {
//   return kg / ONE_POUND
// }

// console.log(getPoundFromKg(1, 0.45));

// функція перевіряє чи два числа закінчуються однаковою цифрою

// function isEqualLastDigit(num1, num2) {
//   return num1%10 === num2%10
// }

// console.log(isEqualLastDigit(423423, 242423423));

//функція повертає суму всіх непарних чисел в заданому діапазоні

// function getSummaOdd(start, end) {
//   let summa =0;
//   for (let i = start; i <= end; i++) {
//    if (i%2===1) {
//     summa += i
//    }
//   }
//   return summa
// }

// console.log(getSummaOdd(1, 5));

// функція приймає вік людини і рахує скільки років лишилося до повноліття і виводить вам лишилося n роки
// за замовчуванням повноліття = 18 років
// якщо  вже повнолітній - виводимо ви вже повнолітній

// function getYearToAdult(age, adult = 18) {
//   return adult <= age ? 'ви вже повнолітній' : `вам лишилося ${adult - age} роки до повноліття`
// }

// console.log(getYearToAdult(16));

// функція приймає ціну піци і кількість друзів і повертає скільки повинен заплатити кожен з них

// function calcCash (price, howPeople) {
//   return price / howPeople
// }

// console.log(calcCash(123, 8));

// функція перевіряє чи є одне число квадратом іншого

function checkSquare(num1, num2) {
  return num1 * num1 === num2 || num2 * num2 === num1;
}

console.log(checkSquare(16, 4));

