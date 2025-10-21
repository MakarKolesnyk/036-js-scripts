// const user = {
//   name: "Bred",
// };

// const person = {
//   name: "Anna"
// }

// const userProto = {
//   say() {
//     return `my name is ${this.name}`;
//   },
//   walk() {
//     return `i am walking`;
//   },
// };

// person.__proto__ = userProto;
// user.__proto__ = userProto;

// console.log(user);
// console.log(user.say());
// console.log(user.walk());
// console.log(person);
// console.log(person.say());
// console.log(person.walk());

const event = {
  tittle: "festival",
};

const eventProto = {
  showTittle() {
    return this.tittle;
  },
};

event.__proto__ = eventProto;

console.log(event);
console.log(event.showTittle());
