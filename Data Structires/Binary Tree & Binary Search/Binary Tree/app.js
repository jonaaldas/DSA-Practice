class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BST {
  constructor(val) {
    this.head = new Node(val)
    this.size = 1
  }
  insert_node(val) {
    let newNode = new Node(val)
    let searchTree = function (node) {
      if (val < node.value) {
        if (!node.left) {
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      } else {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }
    this.size++
    searchTree(this.head)
  }
}


let bst = new BST(23)
bst.insert_node(1)
bst.insert_node(34)
bst.insert_node(89)
bst.insert_node(13)
bst.insert_node(16)
console.log(bst)