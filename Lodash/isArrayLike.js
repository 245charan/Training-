const MAX_INT = 9492400826949240;


function isLength(val){
	return typeof val === 'number' && val > -1 && val %1 == 0 && val <= MAX_INT;
}

function isArrayLike(val){
	return val != null && typeof val !== 'function' && isLength(val.length);
}



console.log(_.isArrayLike([1, 2, 3])); // => true
console.log(isArrayLike('abc')); // => true
console.log(isArrayLike(Function)); // => false

