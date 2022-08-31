 function hashStringToInt(str, tableSize) {
   // prime numbers for stuff
   let hash = 17;
   for (let i = 0; i < str.length; i++) {
     hash = (13 * hash * str.charCodeAt(i)) % tableSize
   }
   return hash
 }
 class HashTable {
   // number is usefull
   table = new Array(333)
   numItems = 0;
   // resizing function
   resize = () => {
     const newTable = new Array(this.table.length * 2)
     this.table.forEach(item => {
       if (item) {
         item.forEach(([key, value]) => {
           const idx = hashStringToInt(key, newTable.length)
           if (newTable[idx]) {
             newTable[idx].push([key, value])
           } else {
              newTable.table[idx] = [
               [key, value]
             ]
           }
         })
       }
     })
     this.table = newTable
   }


   setItem = (key, value) => {
     //  loadfactor
     const loadFactor = this.numItems / this.table.length
     if (loadFactor > 0.8) {
       this.resize()
     }
     const idx = hashStringToInt(key, this.table.length)
     if (!this.table[idx]) {
       this.numItems++
     }
     if (this.table[idx]) {
       this.table[idx].push([key, value])
     } else {
       this.table[idx] = [
         [key, value]
       ]
     }
   }

   getItem = key => {
     const idx = hashStringToInt(key, this.table.length)
     return this.table[idx].find(x => x[0] === key)[1]
   }

   getSize = () => {
     return this.numItems
   }
 }

 const myTable = new HashTable()
 myTable.setItem('firstName', 'Jonathan')
 myTable.setItem('lastName', 'Aldas')
 myTable.setItem('birthday', '03/28/1995')
 myTable.setItem('car', 'Honda Civic')
 myTable.setItem('house', 'Princeton')
 console.log(myTable.table.length)
 console.log(myTable.getItem('birthday'))
 console.log(myTable.table[0])