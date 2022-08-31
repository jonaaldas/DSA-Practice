class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	// insert front
	inserFront(data) {
		this.head = new Node(data, this.head);
		this.length++;
	}
	// insert at
	insertAt(index, val) {
		if (index > 0 && index > this.length) {
			return;
		}
		let curr, prev;
		let count = 0;
		// if empty
		if (index === 0) {
			this.head = new Node(val, this.head);
			return;
		}
		let node = new Node(val);
		curr = this.head;
		while (count < index) {
			prev = curr;
			count++;
			curr = curr.next;
		}
		node.next = curr;
		prev.next = node;

		this.length++;
	}

	// insert last
	insertLast(val) {
		let node = new Node(val);
		let current;
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.length++;
	}
	// print
	print() {
		let current;
		current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}

	// remove at
	// find out why is not woking
	removeAt(index) {
		if (index > 0 && index > this.length) {
			return;
		}

		let current, previous;
		let count = 0;
		current = this.head;
		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		this.length--;
	}
	// remove front
	removeFront() {
		this.head = this.head.next;
	}

	// remove back
	removeBack() {
		let current, previous;
		current = this.head;
		while (current.next) {
			previous = current;
			current = current.next;
		}
		previous.next = current.next;
		// 1,2,3,4,5
	}
	// get item index
	getAtIndex(index) {
		// console.log(this.head);
		if (index > 0 && index > this.length) {
			return;
		}
		if (index === 0) {
			console.log(`I am being logged ${this.head.val}`);
		}

		let current, previous;
		let count = 0;
		current = this.head;
		while (current) {
			count++;
			current = current.next;
			if (count === index) {
				console.log(current.val);
			}
		}
	}
	// update item
	updateItem(index, value) {
		let current = this.head
		let count = 0
		while(current){
			if(count === index){
				current.val = value
			}
			count++
			current = current.next
		}
	}
	// search
	search(val){
		let current = this.head
		while(current){
			if(current.val === val){
				console.log(`${val} exist in this LL`);
			} else {
				console.log(`${val} does not exist in this LL`);
				return
			}
			current = current.next
		}
	}
}

const ll = new LinkedList();
ll.inserFront(100);
ll.inserFront(200);
ll.inserFront(300);
ll.search(5500)
ll.print();
// console.log(ll);
