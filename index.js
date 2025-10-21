const object = {};
console.log(object);

function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

const userPrototype = {
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  },
  getGender() {
    return this.isMale ? "male" : "female";
  },
};

User.prototype = userPrototype;

const user1 = new User("Alex", 15, true);
console.log(user1);
console.log(user1.getInfo());
console.log(user1.getGender());
const user2 = new User("Anna", 25, false);
console.log(user2.getInfo());
