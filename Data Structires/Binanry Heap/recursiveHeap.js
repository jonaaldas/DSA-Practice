//Recursive
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
		this.heapifyUp(this.size - 1);
	}

	heapifyUp(index) {
		if (this.hasParent(index) && this.parent(index) > this.arr[index]) {
			this.swap(this.getParentIndex(index), index);
			this.heapifyUp(this.getParentIndex(index));
		}
	}

	heapifyDown(index) {
		let smallest = index;
		if (this.hasLeftChild(index) && this.arr[smallest] > this.leftChild(index))
			smallest = this.getLeftChildIndex(index);
		if (
			this.hasRightChild(index) &&
			this.arr[smallest] > this.rightChild(index)
		)
			smallest = this.getRightChildIndex(index);
		if (smallest != index) {
			this.swap(index, smallest);
			this.heapifyDown(smallest);
		}
	}

	removeMin() {
		if (this.size == 0) throw new Error("Empty Heap");
		let data = this.arr[0];
		this.arr[0] = this.arr[this.size - 1];
		this.size -= 1;
		this.heapifyDown(0);
		return data;
	}
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(90);
heap.removeMin();
console.log(heap);
