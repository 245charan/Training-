console.log('Promise example');

const employees = [
	{name:'Krishna','role':'Trainee'},	
	{name:'Dheeraj',role:'Trainee'},	
];

function enrollEmployee(employee){
	return new Promise(function(resolve, reject){
	setTimeout(()=>{
		let err =true;
		if(!err){
			employees.push(employee);
			console.log('employeehas been enrolled');
		resolve();
		}else
		{
			reject();
		}
		},1000);
	});
}

function getEmployee(){
	setTimeout(()=>{
		let str='';
		employees.forEach((emp)=>{
			str+= `<ul><li>${emp.name}</li></ul>`;
		});
		document.write = str;
		console.log('Employees have been fetched');
	},5000);
}
let newEmployee = { name : 'Charan', role:'Trainee'};
enrollEmployee(newEmployee).then(function(){ console.log('Thanks')}).catch(()=>{ console.log('Failed')});
			
	
