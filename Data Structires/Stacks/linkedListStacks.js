class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}
class Stack {
	constructor() {
		this.size = 0;
	}
	// time complexity 0(1)
	// space complexity 0(n)
	push(value) {
		if (this.size === 0) {
			this.head = new Node(value, this.next);
			this.size++;
		} else {
			const node = new Node(value, this.next);
			let lastVal = this.head;
			this.head = node;
			this.head.next = lastVal;
			this.size++;
		}
	}
	// time complexity 0(1)
	// space complexity 0(n)
	pop() {
		if (this.size === 0) {
			console.log("Nothing to pop, stack size = " + this.size);
		} else {
			let popVal = this.head.value;
			this.head = this.head.next;
			this.size--;
		}
	}
}

let stack = new Stack();
stack.push(34);
stack.push(5);
stack.pop();
stack.pop();
console.log(stack);
