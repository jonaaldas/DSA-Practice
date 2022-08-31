// * Dictionary is a data structure that consists of key-value pairs. It's a data structure where a key is associated with a value. Hence, they are also called associative arrays. Dictionaries provide lookups on their keys.

class Dictionary{
  constructor(){
    this.data = {}
    this.length = 0
  }

// add to diccionary
  add(key, value){
    let keyType = typeof(key)
    if(keyType !== 'string' && keyType !== 'number'){
      throw 'Key types can only be strings and numbers'
    }

    if(this.data.hasOwnProperty(key)){
      throw 'Duplicates are not suppoerted'
    }

    this.data[key] = value
    this.length++
  }

  find(key){
    if(this.data.hasOwnProperty(key)){
      console.log(this.data[key])
    }
  }

  delete(key){
    if(this.data.hasOwnProperty(key)){
      delete this.data[key]
      console.log('Item has been deleted')
      this.length--
    }
  }
}

const dic = new Dictionary()

dic.add(1,'Hello')
dic.add(2, 'I am')
dic.add(3, 'Jonathan')
dic.add(4, '!')
dic.delete(4)
console.log(dic)