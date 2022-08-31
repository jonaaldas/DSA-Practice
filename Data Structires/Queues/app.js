// Inserting into the queue is called Enqueue.
// Extracting from the queue is called Dequeue.
// Look at the top element in the queue (the one that will be removed on Dequeue). It is called Peek.

// implimnetation

class Queue{
  constructor(){
    this.data = []
  }

  enQueue(data){
    this.data.push(data)
  }

  deQueue(){
    // alters the array, removes the first element of the array, returns removed element
    return this.data.shift()
  }

  peek(){
    return this.data[0]
  }

  getSize(){
    return this.data.length
  }

  isEmpty(){
    return this.getSize() === 0
  }
}

const queue = new Queue()
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.enQueue(400)
// queue.deQueue()
// console.log(queue.peek());
queue.getSize()
queue.isEmpty()
console.log(queue)

