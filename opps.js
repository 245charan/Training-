var myObj = {name: "Charan", profession: "Trainee"}; 

function Employee () {}

Employee.prototype.firstName = "Charan";
Employee.prototype.lastName = "Netha";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
console.log (this.firstName + " " + this.lastName); 
};

var mrnobody = new Employee () //
console.log(mrnobody.fullName()); 
console.log(mrnobody.signedNDA); 