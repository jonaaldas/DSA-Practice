// A binary tree is a linked data structure where each node points to two child nodes (at most). The child nodes are called the left child and right child.

// Unlike other linear data structures that we looked, it's a hierarchical data structure. Here are the properties of a binary tree.

// Each node can point to two children at most.
// The top most element in the tree is called root.
// Two Children are usually referred as Left Child and Right Child.
// The nodes which don't point to any children are called leaf nodes.
// Non-leaf nodes are called internal nodes. Root is also an internal node if it's not a leaf node.
// Let's step through a few visualizations to internalize these properties.

export class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export class BST {
  constructor(val) {
    this.root = new Node(val)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count++

    let newNode = new Node(value)

    const searchTree = node => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode
        } 
        // if left child, look left again
        else {
          searchTree(node.left)
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode
        }
        // if right child, look right again
        else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }

  min() {
    let currentNode = this.root
    // continue traversing left until no more nodes
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode
  }

  max() {
    let currentNode = this.root
    // continue traversing right until no more nodes
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode
  }

  contains(val) {
    // check with root node to see if we go left or right
    let currentNode = this.root
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode.value
      }
      // we go right
      if (val > currentNode.value) {
        return currentNode = currentNode.right
        // we go left
      } else {
        return currentNode = currentNode.left
      }
    }
    return null
  }

  // depth first seach 

  // in-order
  // left, root, right
  // 2,3,12,15,28,36,39
  dfsInOrder() {
    let result = []

    const traverese = node => {
      // if left child exists, go left again
      if (node.left) {
        traverese(node.left)
      }
      // capture root node value
      result.push(node.value)
      // if right child exists, go right again
      if (node.right) {
        traverese(node.right)
      }
      return result
    }
  }

  // pre-order
  // root, left, right
  // 15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = []

    const traverese = node => {
      // capture root node value
      result.push(node.value)
      // if left child exists, go left again
      if (node.left) {
        traverese(node.left)
      }
      // if right child exists, go right again
      if (node.right) {
        traverese(node.right)
      }
      return result
    }
  }
  // post-order
  // left, right, root
  // 2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = []

    const traverese = node => {
      // if left child exists, go left again
      if (node.left) {
        traverese(node.left)
      }
      // if right child exists, go right again
      if (node.right) {
        traverese(node.right)
      }
      // capture root node value
      result.push(node.value)
      return result
    }
  }

  // breadth first search - level by level
  // use a queue!
  // 15, 3, 36, 2, 12, 28, 39
  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)

    while (queue.length) {
      let currentNode = queue.shift()

      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result

  }
}