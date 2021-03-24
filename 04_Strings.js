let space = ' '           // an empty space string
let firstName = 'Charan'
let lastName = 'Netha'
let country = 'India'
let city = 'Hyderabadki'
let language = 'JavaScript'
let job = 'Trainee'
let age = 245
let quote = "What we don't know is what usualy gets us killed."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`


let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)


let js = 'JavaScript'
console.log(js.length) //10

let Name = 'Charan' //6
console.log(Name.length)

let string = 'JavaScript'
let fl = string[0]
console.log(fl)
 let lastindex = string.length-1
console.log(lastindex)
console.log(string[lastindex])


/* toUpperCase() */
console.log(Name.toUpperCase())

// toLowerCase
console.log(string.toLowerCase())

//substr()-> index, num of characters
console.log(string.substr(4,6))  //script

//substring()-> starting index, stopping index
console.log(string.substring(0,4)) //java
//split()
string = 'welcome to javascript, code in Javascript'
console.log(string.split()) // change to array -> ['welcome to javascript, code in Javascript']
console.log(string.split(' ')) // Split to an array at spaces

console.log(Name.split('')) //Split to an array at each letter -> ["C", "h", "a", "r", "a", "n"]
//trim()

console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

//includes() returns boolean

console.log(string.includes('to')) // -> true
