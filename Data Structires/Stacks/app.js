class Stack {
	constructor() {
		this.val = [];
		this.size = 0;
	}

	//push -> add an element to the top of the arr
	stackPush(val){
		this.val.push(val)
		this.size++
	}
	//pop -> removes an element form the top of the array and returns the element
	stackPop(){
		const val = this.val[this.val.length - 1]
		this.val.pop(this.val.length - 1)
		this.size--
		console.log(val);
		return val

	}
	// peek -> return the top element from the arr 
	peek(){
		const val = this.val[this.val.length - 1]
		console.log(val);
	}

	// length -> return the length of the arr
	length(){
		console.log(this.size);
	}

	show(){
		console.log(this.val);
	}
}

const stack = new Stack()
stack.stackPush(12)
stack.stackPush(2)
stack.stackPush(52)
stack.peek()
stack.length()
stack.show()
