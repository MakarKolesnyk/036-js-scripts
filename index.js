const object = {};
console.log(object);

function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

User.prototype.getGender = function() {
    return this.isMale ? "male" : "female";
  };  

User.prototype.getInfo = function() {
    return `${this.name} is ${this.age} years old`;
  }

const user1 = new User("Alex", 15, true);
console.log(user1);
console.log(user1.getInfo());
console.log(user1.getGender());
const user2 = new User("Anna", 25, false);
console.log(user2.getInfo());
