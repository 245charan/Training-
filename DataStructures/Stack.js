const Max=1000;
function Stack() {
    this.s = [];
    this.top = 0;
    this.push= push;
    this.pop=pop;
    this.peek = peek;
}

function push(elem){
	if(top >= Max-1){
		console.log("Stack Overflow");
	}
	else{
    this.s[this.top++] = elem;
	console.log(elem +" pushed into stack")
	
	}
}
function pop(){
	
	if(top<0){
		console.log("Stack Underflow");
	}
	else{
		let x = this.s[--this.top];
		return x;
	}
}
function peek(){
	if(top<0){
		console.log("Stack Underflow");
	}
	else{
		let x = this.s[this.top-1];
		return x;
	}
}

var stk = new Stack();
stk.push(10);
stk.push(20);
stk.push(30);
