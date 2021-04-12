function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
console.log(Person);

var Trainee = new Person("Charan", "Netha",22,"Brown");
console.log(Trainee);
//new object inherits all properties and methods
function PrintStuff (myDocuments) {
this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
console.log(this.documents);
}

var newObj = new PrintStuff ("I am a new Object and I can print.");

newObj.print (); 