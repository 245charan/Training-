class Node{
	constructor(data){
		this.data = data;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BST{
	constructor(nodeVal){
		this.root = new Node(nodeVal);
	}
	insertUtil(currNode, newVal){
		if(currNode === null){
			currNode = new Node(newVal);
		}
		else if(newVal < currNode.data){
			currNode.leftChild = this.insertUtil(currNode.leftChild, newVal);
		}
		else {
			currNode.rightChild = this.insertUtil(currNode.rightChild,newVal);
		}
		return currNode;
	}
	
	insertBST(newVal){
		if(this.root == null){
			this.root = new Node(newVal);
			return;
		}
		this.insertUtil(this.root, newVal);
	}
	
	preOrder(currNode){
		if(currNode !== null){
			console.log(currNode.data);
			this.preOrder(currNode.leftChild);
			this.preOrder(currNode.rightChild);
		}
	}
	
	inOrder(currNode){
		if(currNode !== null){
			this.inOrder(currNode.leftChild);
			console.log(currNode.data);
			this.inOrder(currNode.rightChild);
		}
	}
	
	postOrder(currNode){
		if(currNode !== null){
			this.postOrder(currNode.leftChild);
			this.postOrder(currNode.rightChild);
			console.log(currNode.data);
		}
	}
	
	searchUtil(currNode, value){
		if(currNode !== null){
			if(value == currNode.data){
				return currNode;
			}
			else if(value < currNode.data){
				return this.searchUtil(currNode.leftChild, value);
			}
			else{
				return this.searchUtil(currNode.rightChild,value);
			}
		} else{
			return null;
		}
	}
	
	searchBST(value){
		return this.searchUtil(this.root, value);
	}
	
	delete(currNode, val){
		if(currNode == null){
			return false;
		}
		
		var parentNode;
		while(currNode && (currNode.data != val)){
			parentNode = currNode;
			if(value<currNode.data){
				currNode = currNode.leftChild;
			}
			else{
				currNode = currNode.rightChild;
			}
		}
		
		if(currNode ===  null){
			return false;
		}
		else if( currNode.leftChild == null && currNode.rightChild == null){
			if(currNode.data == this.root.data){
				this.root = null;
				return true;
			}
			else if(currNode.data <parentNode.data){
				parentNode.leftChild = null;
				return true;
			}
			else{
				parentNode.rightChild = null;
				return  true;
			}
		}
		else if(currNode.rightChild == null){
			if(currNode.rightChild == this.root.data){
				this.root = currNode.leftChild;
				return true;
			}
			else if(currNode.leftChild.data <parentNode.data){
				parentNode.leftChild = currNode.leftChild;
				return true;
			}
			else{
				parentNode.rightChild = currNode.leftChild;
				return true;
			}
		}				
		else if(currNode.leftChild == null){
			if(currNode.data == this.root.data){
				this.root = currNode.rightChild;
				return true;
			}
			else if(currNode.rightChild.data < parentNode.data){
				parentNode.leftChild = currNode.rightChild;
				return true;
			}
			else{
				parentNode.rightChild = currNode.rightChild;
				return true;
			}
		}
		else{
			var minRight = currNode.rightChild;
			while(minRight.leftChild !== null){
				minRight = minRight.leftChild;
			}
			var temp = minRight.data;
			this.delete(this.root, minRight.data);
			currNode.data = temp;
			return true;
		}
	}
}
			
	
	function findMin(rootNode){
		if(rootNode.leftChild == null)
			return null;
		else if(rootNode.leftChild == null){
			return rootNode.data;
		}
		return findMin(rootNode.leftChild);
	}
	
	
var bst = new BST(6);
bst.insertBST(20);
bst.insertBST(-1);
	
console.log(findMin(bst.root));