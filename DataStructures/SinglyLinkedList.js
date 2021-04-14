class Node{
	constructor(data){
		this.data = data;
		this.nextElement = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}
	
	//Insert At Head
	insertAtHead(newData){
		let tempNode = new Node(newData);
		tempNode.nextElement = this.head;
		this.head =  tempNode;
		return this;
	}
	
	isEmpty(){
		return(this.head == null);
	}
	
	printList(){
		if(this.isEmpty()){
			console.log("List is Empty");
			return false;
		}
		else {
			let temp = this.head;
			while(temp != null){
				console.log(temp.data);
				console.log("->");
				temp = temp.nextElement;
			}
			console.log("null");
			return true;
		}
	}
	
	getHead(){
		return this.head;
	}
	setHead(newHead){
		this.head = newHead;
		return this;
	}
	getListStr(){
		if(this.isEmpty()){
			console.log("List is Empty");
			return "null";
		}
		else{
			let st = "";
			let temp = this.head;
			while(temp != null){
				st += String(temp.data);
				st += "->";
				temp = temp.nextElement;
			}
			st += "null";
			return st;
		}
	}
	
	
	//Insert At Tail
	insertAtTail(newData){
		let node = new Node(newData);
		if(this.isEmpty()){
			this.head = node;
			return this;
		}
		let currNode = this.head;
		
		while(currNode.nextElement != null){
			currNode = currNode.nextElement;
		}
		
		currNode.nextElement = node;
		return this;
	}
	
	Search(val){
		let currNode = this.head;
		
		while(currNode!= null){
			if(currNode.data == value){
				return true;
			}
			currNode = currNode.nextElement
		}
		return false;
	}
	
	deleteAtHead(){
		if(this.isEmpty()){
			return this;
		}
		
		let firstElement = this.head;
		this.head = firstElement.nextElement;
		
		return this;
	}
	
	deleteAtTail(){
		if(this.isElement()){
			return this;
		}
		
		let firstNode = this.head;
		if(firstNode.nextElement == null){
			this.deleteAtHead();
			return this;
		}
		
		while(firstNode.nextElement.nextElement != null){
			firstNode = firstNode.nextElement;
		}
		firstNode.nextElement = null;
		return this;
	}
}

	
// 	deleteVal(val){
// 		let deleted = null;
		
// 		if(this.isEmpty()){
// 			return false;
// 		}
// 		let currNode = this.head;
// 		if(currNode.data == val){
// 			this.head = currNode.nextElement;
// 			return true;
// 		}
		
// 		while(currNode.nextElement != null){
			
// 			if(currNode.nextElement.data == val){
// 				currNode.nextElement = currNode.nextElement.nextElement;
// 				return true;
// 			}
// 			currNode = currNode.nextElement;
// 		}
// 		deleted = false; // node not found
// 		return deleted;
// 	}
	
	function reverse(list){
		let prevNode = null;
		let currNode = list.getHead();
		let nextNode = null;
		
		while( currNode != null ){
			nextNode = currNode.nextElement;
			currNode.nextElement = prevNode;
			prevNode = currNode;
			currNode = nextNode;
		}
		
		list.setHead(prevNode);
	}
	
	
	let list = new LinkedList();
	list.insertAtHead(4);
	list.insertAtHead(3);
	list.insertAtHead(2);
	list.insertAtHead(1);
	list.insertAtHead(0);
	list.printList();
	reverse(list);
	list.printList();