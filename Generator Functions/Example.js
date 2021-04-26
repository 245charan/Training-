function countTrainees(){
	let TraineeList=[1,2,3,4,5,6,7,8,9];
	for(let i=0; i< TraineeList.length;i++){
		yeild TraineeList[i];
	}
}

let Trainee = countTrainees();
console.log(Trainee.next())      
console.log(Trainee.next())      
console.log(Trainee.next())    
console.log(Trainee.next()) 
