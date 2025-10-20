// constructor

/**
 *
 * @param {string} name
 * @param {number} age
 */
function User(name, age){
    this.name = name;
    this.age = age;
    this.getInfo=function(){
        return `${this.name} is ${this.age} years old`
    }
}

// instance
const user1 = new User('Fred', 12)
console.log(user1.getInfo());
const user2 = new User('Anna', 18)
console.log(user2.getInfo());
const user3 = new User('Andrey', 22)
console.log(user3.getInfo());

/**
 *
 * @param {string} brand
 * @param {string} model
 * @param {number} price
 */
function Phone(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.getDetails = function () {
    return `${brand} ${model} coasts ₴${price}`;
  };
}

const phone1 = new Phone('Iphone', '14 Pro', 25000)
console.log(phone1.getDetails());
const phone2 = new Phone('Nokia', '3310', 500)
console.log(phone2.getDetails());
const phone3 = new Phone('Samsung', 's25 ultra', 35000)
console.log(phone3.getDetails());