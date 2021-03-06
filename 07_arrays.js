// using Array constructor 

const arr1 = Array()
let arr2 = new Array()
console.log(arr1)
console.log(arr2)

// Using square brackets []

const arr3 = []
console.log(arr3)

const numbers = [0, 3.14, 9.81, 245, 98.6, 200] // array of numners
console.log('Number:', numbers)
console.log('Number of numbers:', numbers.length)
// array of strings
const fruits = ['banana', 'orange', 'mango', 'lemon']

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

const arr4 = ['Charan', 245, true, { country: 'India', city: 'Hyderabad' }, { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }]
console.log(arr4)
// split() -> '' or ',' or ' '
let js = "JavaScript"
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)
// concatenate
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// Add items to an Array
var cities = ["Hyderabad", "Chennai", "Bangalore"];
cities.push("Delhi"); // push adds at the end of an array.
console.log(cities);

cities.unshift("Mumbai"); // unshift, adds elements to the front of an array
console.log(cities);

// Loop over an array

for(var i=0;i<cities.length;i++)
    console.log(cities[i]+"\n");


// Remove items from an Array

cities.pop(); // removes last element
console.log(cities);
cities.shift(); // removes front element
console.log(cities);

