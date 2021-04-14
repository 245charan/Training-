const MAX_INT = 9492400826949240;


function isLength(val){
	return typeof val === 'number' && val > -1 && val %1 == 0 && val <= MAX_INT;
}


console.log(isLength(3)); // => true
console.log(isLength('3')); // => false
console.log(_.isLength('3.5')); // => false