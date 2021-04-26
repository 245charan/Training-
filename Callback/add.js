function addition(x,y,callback){
	setTimeout(()=>{
		document.write(`The sum of ${x} and ${y} is ${x+y}');
		callback();
},5000);}

function display(){
	document.write('Number added!');
}

addition(25,52,display);
	