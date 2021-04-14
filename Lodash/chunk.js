function slice( array, start , end){
	let length = array == null?0:array.length;
	if(!length){
		return [];
	}
	
	start = start == null ? 0: start;
	end = end === undefined ? length: end;
	
	if(start < 0){
		start = -start > length ?0: (length + start);
	}
	
	end = end > length ? length : end;
	
	if(end<0){
		end+= length;
	}
	
	length =  start > end ? 0: (( end - start ) >>> 0);
	start >>>=0;
	
	let index =-1;
	const result = new Array(length);
	while(++index < length){
		result[index] = array[index+start];
	}
	return result;
}


function chunk(array, size = 1) {
  //size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}


arr=[1,3,5,7,9,11];
console.log(chunk(arr,4));

console.log(_.chunk(arr,4));
