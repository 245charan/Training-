



// Configurable
var person = {}; 
Object.defineProperty(person, "name", { 
	configurable: false,
	value: "Charan" 
	});
console.log(person.name); // Charan 
delete person.name; 
console.log(person.name); // Charan

/* Throws error 

Object.defineProperty(person, "name", { 
	configurable: true,
	value: "Charan" 
	}); */


//Writable
var person = {};
Object.defineProperty(person, "name",{
	writable: false,
	value: "Charan"
	});
console.log(person.name); // Charan
person.name = "Aravind"; 
console.log(person.name); // Charan
