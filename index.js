// function Movie (tittle, director, releaseYear){
//     this.tittle = tittle;
//     this.director = director;
//     this.releaseYear = releaseYear;
//     this.getPoster=function(){
//         return `${tittle} directed by ${director}, ${releaseYear}`
//     }
//     this.toString = function (){
//         return this.tittle;
//     }
// }

// const movie1 = new Movie("Titanic", "James Cameron", 1997)
// console.log(movie1.toString());
// const movie2 = new Movie("Avengers: Endgame", "Anthony Russo, Joe Russo", 2019)
// console.log(movie2.getPoster());
// const movie3 = new Movie("Oppenheimer", "Christopher Nolan", 2023)
// console.log(movie3.getPoster());

// alert(movie1)

function City(name,country,population) {
  this.name = name;
  this.country = country;
  this.population = population;
  this.toString = function(){
    return `city is ${name} in country ${country}`
  }
  this.getFullInfo = function(){
    return `city is ${name} in country ${country} with a population ${population}`
  }
}

const city1 = new City ('New York', 'USA', 8467513);
console.log(city1);
console.log(city1.toString());
const city2 = new City ('Kiev', 'Ukraine', 100000);
console.log(city2);
console.log(city2.toString());
alert(city1)
alert(city2)