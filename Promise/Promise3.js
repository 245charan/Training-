function func1(){
	return new Promise( function (resolve, reject){
		 setTimeout(()=>{
			 let error = true;
			 if(!error){
				 console.log("Function: your promise has been resolved");
				 resolve();
			 }
			 else{
					console.log('Function : your promise has been rejected');
					reject('Sorry not fulfilled');
			}
		},5000);
	})
}

func1().then(function(){
console.log('Thanks for resolving')
}).catch(function(error){
	console.log('Very bad service. Reason: '+error);
});