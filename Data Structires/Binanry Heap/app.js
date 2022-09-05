// iterative
class MinHeap {
	constructor() {
		this.arr = [];
		this.size = 0;
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index) {
		return 2 * index + 1;
	}

	getRightChildIndex(index) {
		return 2 * index + 2;
	}

	// checking is the node has a left or right child
	hasParent(index) {
		return this.getParentIndex(index) >= 0;
	}

	hasLeftChild(index) {
		return this.getLeftChildIndex(index) < this.size;
	}

	hasRightChild(index) {
		return this.getRightChildIndex(index) < this.size;
	}

	parent(index) {
		return this.arr[this.getParentIndex(index)];
	}
	leftChild(index) {
		return this.arr[this.getLeftChildIndex(index)];
	}
	rightChild(index) {
		return this.arr[this.getRightChildIndex(index)];
	}

	swap(index1, index2) {
		let temp = this.arr[index1];
		this.arr[index1] = this.arr[index2];
		this.arr[index2] = temp;
	}

	// inserting
	insert(data) {
		this.arr[this.size] = data;
		this.size += 1;
		this.heapifyUp();
	}

	heapifyUp() {
		let index = this.size - 1;
		while (this.hasParent(index) && this.parent(index) > this.arr[index]) {
			this.swap(this.getParentIndex(index), index);
			index = this.getParentIndex(index);
		}
	}

	removeMin() {
		if (this.size === 0) {
			throw new Error("Its empty");
		}
		let data = this.arr[0];
		this.arr[0] = this.arr[this.size - 1];
		this.size--;
		this.heapifyDown();
		return data;
	}

	heapifyDown() {
		let index = 0;
		while (this.hasLeftChild(index)) {
			let smallerChildIndex = this.getLeftChildIndex(index);
			if (
				this.hasRightChild(index) &&
				this.rightChild(index) < this.leftChild(index)
			)
				smallerChildIndex = this.getRightChildIndex(index);
			if (this.arr[index] < this.arr[smallerChildIndex]) break;
			else this.swap(index, smallerChildIndex);
			index = smallerChildIndex;
		}
	}
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(90);
heap.removeMin();
console.log(heap);
