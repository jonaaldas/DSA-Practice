class Node {
  constructor(head, next = null) {
    this.head = head
    this.next = next
    this.back = head
  }
}


class Queue{
  constructor(){
    this.size = 0
  }

  enQueue(val){
    let node =  new Node(val, this.next)
    if(this.size === 0){
      this.head = node
    } else {
      this.back.next = node
    }
    this.back = node
    this.size++
  }

  deQueue(){
    if(this.head === null ){
      console.log('this is empty')
    }else {
      let r = this.head.value
      this.head = this.head.next
      this.size--
      return r
    }
  }

  peek(){
    if(this.head !== null)
    return this.head.head
  }

  isempty(){
    if(this.size === 0){
      return true
    } else {
      return false
    }
  }
}

let que = new Queue()
que.enQueue(44)
que.enQueue(5)
que.enQueue(10)
console.log(que);