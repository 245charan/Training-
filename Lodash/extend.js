Object.prototype.extend = function(obj){
	for( var i in obj){
		if(obj,hasOwnProperty(i)){
			this[i] = obj[i];
		}
	}
}

var objA = { "name": "Charan", "car": "Tesla S"};
var objB = { "name": "Aravind", "age":22};

console.log(objA.extend(objB));

console.log(_.assign(objA, objB));
