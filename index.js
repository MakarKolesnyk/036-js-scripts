// const number1 = prompt('enter first number', 5);
// const number2 = prompt('enter secons number', 3);

// console.log(' number1 = ', number1, typeof number1);
// console.log(' number1 = ', number2, typeof number2);

// // + - concatenation
// const summa1 = number1 + number2;
// alert(summa1);

// const summa2 = +number1 + +number2;
// alert(summa2);

// const summa3 = Number(number1) + Number(number2);
// alert(summa3);

// const substruck = Number(number1) - Number(number2);
// alert(substruck);

const firstNameProduct = prompt('enter what you want buy fisrt');
const firstPriceProduct = prompt('enter price ' + firstNameProduct);

const secondNameProduct = prompt('enter what you want buy second');
const secondPriceProduct = prompt('enter price ' + secondNameProduct);

const summaAllProduct = Number(firstPriceProduct) + Number(secondPriceProduct);

alert('your buy:\n' + firstNameProduct + ' - ' + firstPriceProduct + 'Uah ' + "\n" + secondNameProduct + ' - ' + secondPriceProduct + 'Uah '
    + "\n-------------------" + "\nfor payment " + summaAllProduct + 'Uah'
)


// const userName = prompt('write your name');
// console.log(userName);
// alert('Hi, ' + userName + '!');

// const currectYear = new Date().getFullYear();
// console.log(typeof currectYear, currectYear);

// const userDateOfBirth = prompt('write your date of birth');
// console.log(typeof userDateOfBirth, userDateOfBirth);

// // alert('thanks!')

// const userAge = currectYear - userDateOfBirth;

// alert(userName + ',' + ' to you ' + userAge + '!');

// const userAgeThrough10Years = userAge + 10;
// alert(userName + ',' + ' in 10 years you will be ' + userAgeThrough10Years + '!');