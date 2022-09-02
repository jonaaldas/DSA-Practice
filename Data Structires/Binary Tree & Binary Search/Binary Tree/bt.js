class Node {
	constructor(val, left = null, right = null) {
		this.value = val;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor(val) {
		this.head = new Node(val);
		this.size = 0;
	}

	insertNode(val) {
		let newNode = new Node(val);
		const placement = function (node) {
			if (val < node.value) {
				// left
				if (!node.left) {
					node.left = newNode;
				} else {
					placement(node.left);
				}
			} else {
				// right
				if (!node.right) {
					node.right = newNode;
				} else {
					placement(node.right);
				}
			}
		};
		this.size++;
		placement(this.head);
	}

	findData(val) {
		let findMe = function (node) {
			if (val < node) {
				if (node.left === val) {
					return true;
				} else {
					findMe(node.left);
				}
			} else if (val > node) {
				if (node.right === val) {
					return true;
				} else {
					findMe(node.right);
				}
			} else if (node === val) {
				return true;
			}
		};
		findMe(this.head);
	}
}

const bs = new BST(74);
bs.insertNode(10);
bs.insertNode(75);
console.log(bs.findData(7));
console.log(bs);
