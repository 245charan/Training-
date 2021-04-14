// Native Function

//Native Function

function getRandomNumber(min,max){
	return Math.floor(Math.random() *(max - min+1))+min;
}

var randomNum1 = getRandomNumber(1,100);
console.log(randomNum1);

// Lodash

var randomNum2 = _.random(1,100);
console.log(randomNum2);