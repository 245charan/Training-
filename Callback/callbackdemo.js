console.log(' Callback Demo ');

const employees = [
		{name : "Charan", role: "Trainee"},
		{name : " Aravind", role: "Trianee"}
	];
	
function enrollEmployee(employee, callback){
	setTimeout(function(){
		employees.push(employee);
		console.log('Employee has been enrolled');
		callback();
	},1000);
}

function getEmployees(){
	setTimeout(()=>{
		let str ="";
		employees.forEach((emp)=>{
			str +=`<li>${emp.name}</li>`;
		});
		document.getElementById('emp').innerHTML = str;
		console.log("Employees have been fetched");
	},5000);
}

let newEmployee = {name:"Ashok", role:"Traine"};
enrollEmployee(newEmployee,getEmployees);
