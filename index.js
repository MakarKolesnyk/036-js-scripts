// object

const user1 = {
  firstName: "Brad",
  lastName: "pitt",
  age: 32,
  isMale: true,
};

// console.log(user1);
// console.log(user1.firstName);

// const object = new Object({key: 12})
// console.log(object);
const book = {
  tittle: "It",
  author: "Stiven King",
  yearCreate: 1982,
  isReading: false,
  getInfo(){
    return `${this.author} "${this.tittle}", ${this.yearCreate}`
  },
  "two words": 'value two words'
};

console.log(book.getInfo());
book["two words"] = 121212
console.log(book["two words"]);
console.log(book["isReading"]);
console.log(book["yearCreate"]);

console.log(book);
// addd new property
book.pages = 845;
// delete property
delete book.pages;