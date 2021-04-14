function flip(fun){
	if(typeof fun !== 'function'){
		throw new TypeError('Expected a function');
	}
	
	return function(...args){
		return fun.apply(this, args.reverse())
	}
}




console.log(flipped('a', 'b', 'c', 'd')); // => 
console.log(_.flipped('d', 'c', 'b', 'a'));

