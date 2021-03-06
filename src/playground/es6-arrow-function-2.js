// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log(add(55, 1))

// this keyword - no longer bound

const user = {
  name: 'Jace',
  cities: ['Gonzales', 'Baton Rouge', 'Phoenix'],
  printPlacesLives () {
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLives())

// Challenge area

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply () {
    return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())
