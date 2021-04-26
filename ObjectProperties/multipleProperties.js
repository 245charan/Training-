let book = {}; 
Object.defineProperties(book, { 
		year_: { 
		 value: 2021
		}, 
		edition: { 
		 value: 1
		}, 
		year: { 
		 get(){ 
		  return this.year_;
		 }, 
		 set(newValue){
		  if (newValue> 2021) {
			this.year_ = newValue; 
			this.edition += newValue - 2021;
			} 
		} 
	}
});


var descriptor = Object.getOwnPropertyDescriptor(book, "year_"); 
	console.log(descriptor.value); // 2021 
	console.log(descriptor.configurable); // false 
	console.log(typeof descriptor.get); // undefined 
	
	
var descriptor = Object.getOwnPropertyDescriptor(book, "year");
 console.log(descriptor.value); // undefined 
 console.log(descriptor.enumerable); // false 
 console.log(typeof descriptor.get);


