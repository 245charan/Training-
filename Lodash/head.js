function head(array) {
	if(typeof array !== 'object'){
		throw new TypeError('Expected a object');
	}
	
  return (array != null && array.length)? array[0]: undefined
}


console.log(head([]));
console.log(head([1, 2, 3]));


console.log(_.head("charan"));
console.log(_.head([1, 2, 3]));