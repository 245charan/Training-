
console.log(`The sum of 2 and 3 is 5.`)              // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a+b}.`) // injecting the data dynamically


let firstName = 'Sai Charan'
let lastName = 'Netha'
let country = 'India'
let city = 'Hyderabad'
let language = 'JavaScript'
let job = 'Trainee'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` 
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
