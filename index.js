// const phone = {
//   brand: "iphone",
//   model: "14 Pro",
//   price: 35499,
//   getDetails() {
//     return `${this.brand} ${this.model} costs ₴${this.price} color: ${this.color}`;
//   },
// };

// console.log(phone);
// console.log(phone.getDetails());

// phone.color = "red";
// console.log(phone.getDetails());


// const country = {
//   Name: "China",
//   capital: 'Beijing',
//   area: 9596961,
//   population: 1408280000,
//   getDescribe (){
//     return `The ${this.capital} is capital of ${this.Name}`
//   },
//   getDestination (){
//     return `Destination = ${this.population / this.area}`
//   }
// }
// console.log(country.getDescribe());
// console.log(country.getDestination());


const rectangle = {
  width: 10,
  height: 10,
  getPerimetr (){
    return `Perimetr = ${this.height + this.width * 2}`
  },
  getArea (){
    return `Area = ${this.height * this.width}`
  }
}

console.log(rectangle.getPerimetr());
console.log(rectangle.getArea());