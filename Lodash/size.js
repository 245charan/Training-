function isArrayLike(value) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}

function size(collection)
{
	if(collection == null){
		return 0;
	}
	
	return collection.length;
}





console.log(size([1, 2, 3]));
console.log(_.size([1, 2, 3, 5, 6]));

