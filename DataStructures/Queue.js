class Queue{
	constructor(){
		this.items = [];
		this.front = null;
		this.back = null;
	}
	
	isEmpty(){
		return this.items.length == 0;
	}
	
	getFront(){
		if(this.items.length ==0){
			return null;
		}
		else{
			return this.items[0];
		}
	}
	
	size(){
		return this.items.length;
	}
	
	enqueue(ele){
		console.log(ele+" is the element you entered in Queue");
		this.items.push(ele);
	}
	
	dequeue(){
		if(this.items.length == 0){
			console.log("Queue Underflow");
			return null;
		}
		else{
			let x=this.items.shift();
			console.log(x);
			return x;
		}
	}
}


function FIFO(){
	
	let myQueue = new Queue();
	
	for(let i = 0;i<5;i++)
		myQueue.enqueue(i);
	
	let size = myQueue.size();
	console.log(" Size of queue-"+ size);
	
	while(myQueue.isEmpty()){
		console.log(myQueue.getFront());
		myQueue.dequeue();
	}
}

FIFO();