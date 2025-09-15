if (confirm("You want convert from USD to UAH?")) {
  const howMuchUsdYouWantConvert = prompt("How much USD you Want Convert");
  const courseUSD = prompt('Write course USD')
  const howMuchUahHaveUser = Number(howMuchUsdYouWantConvert) * courseUSD;
  alert("In UAH you have -" + howMuchUahHaveUser + "!");
} else {
 const howMuchUahYouWantConvert = prompt("How much UAH you Want Convert");
 const courseUSD = prompt('Write course USD')
 const howMuchUahHaveUser = Number(howMuchUahYouWantConvert) / courseUSD;
 alert("In USD you have - " + howMuchUahHaveUser+"!")
}

// let amount = 0;

// if (confirm("Is the Sun a star?")) {
//   amount++;
// }

// if (!confirm("Does the Moon orbit Mars?")) {
//   amount++;
// }

// if (confirm("Does Saturn have rings?")) {
//   amount++;
// }

// if (!confirm("Is Jupiter the smallest planet in the Solar System?")) {
//   amount++;
// }

// if (confirm("Can astronauts float in space because of microgravity?")) {
//   amount++;
// }

// alert("Congratulations your score - " + amount + "!");

// const whatUserWantForBD = prompt('what you want for birth day?')
// const isWhatUserWantForBD = confirm('This what you want for birth day - ' + whatUserWantForBD + '!')

// if (whatUserWantForBD) {
//     alert('Good! I go find your present')
// } else {
//     alert('Think again')
// }

// const userName = prompt('Enter your name');
// const isUserName = confirm('This your name - ' + userName + '?')

// console.log(userName);
// console.log(isUserName);

// if (isUserName) {
//     alert('Hi, ' + userName + '!');
// } else {
//     alert('next time be careful!')
// }

