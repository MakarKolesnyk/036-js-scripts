// const object = {};
// console.log(object);

// function User(name, age, isMale) {
//   this.name = name;
//   this.age = age;
//   this.isMale = isMale;
// }

// const userPrototype = {
//   getInfo() {
//     return `${this.name} is ${this.age} years old`;
//   },
//   getGender() {
//     return this.isMale ? "male" : "female";
//   },
// };

// function UserPrototype() {
//   this.getInfo = function () {
//     return `${this.name} is ${this.age} years old`;
//   };
//   this.getGender = function () {
//     return this.isMale ? "male" : "female";
//   };
// }

// User.prototype = new UserPrototype();

// const user1 = new User("Alex", 15, true);
// console.log(user1);
// console.log(user1.getInfo());
// console.log(user1.getGender());
// const user2 = new User("Anna", 25, false);
// console.log(user2.getInfo());

// function Circle(r) {
//   this.r = r;
// }

// function CirclePrototype() {
//   this.getArea = function () {
//     return `Area ${Math.PI * this.r * this.r}`;
//   };
//   this.getPerimetr = function () {
//     return `perimetr ${2 * Math.PI * this.r}`;
//   };
//   this.getDiametr = function () {
//     return `diametr ${2 * this.r}`;
//   };
// }

// Circle.prototype = new CirclePrototype();

// const circle = new Circle(10);

// console.log(circle);
// console.log(circle.getArea());
// console.log(circle.getPerimetr());
// console.log(circle.getDiametr());

function Product(tittle, price, amount) {
  this.tittle = tittle;
  this.price = price;
  this.amount = amount;
}

function ProductPrototype() {
  this.getInfo = function () {
    return `${this.tittle} costs ${this.price} uah`;
  };
  this.getTotal = function () {
    return this.amount * this.price;
  };
}

Product.prototype = new ProductPrototype();

const product1 = new Product("Chocolate", 50, 10);

console.log(product1);
console.log(product1.getInfo());
console.log(product1.getTotal());