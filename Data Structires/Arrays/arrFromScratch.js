class myArr {
  constructor() {
    this.data = {}
    this.length = 0
  }

  // get item at index
  getItem(index) {
    return this.data[index]
  }

  // push
  push(item) {
    // add elements to an obj
    this.data[this.length] = item
    this.length++

  }

  //remove back or pop
  pop() {
    let lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  // delete Items and given index
  delete(index) {
    let deleltedItem = this.data[index]
    this.shift(index)
    delete this.data[this.length - 1]
    this.length--
    return deleltedItem
  }
  shiftToLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
  }

  // delete at the fron or shift
  shift() {
    let item = this.data[0]
    delete this.data[0]
    this.length--
    for (let key in this.data) {
      delete Object.assign(this.data, {[key - 1]: this.data[key]})[key]
    }
    return item
  }
}


const arr = new myArr()
arr.push(0)
arr.push(90)
arr.push(4545)
arr.push(3)
arr.push(80)
arr.push(10)
console.log(arr.shift());
console.log(arr);







// delete(index){
//   const item =  this.data[index]
//   this.shift(index)
//   delete this.data[this.length - 1]
//   this.length--
//   return item
// }
// shift(index){
//   for (let i = index; i < this.length - 1; i++) {
//     this.data[i] = this.data[i + 1]
//   }
// }