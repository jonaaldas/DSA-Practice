const array = []


// Time Complexity 
// Insert / Remove at end O(1)
// Insert / Remove from begining O(N)
// Acces O(1)
// Search O(n)
// push/pop O(1)
// shift / unshift / concat / slice / splice -> O(n)
// forEach / map / reduce -> O(n)
// show length of array
// console.log(array.length)

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
array.push(10)
array.push(500)
array.push(600)

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// array.pop()

// delete somehting from the begging of the array
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// array.shift()

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// array.unshift(20,40)

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
//modifying the arr

array.splice(1,1, 1000)

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(array)
console.log(array.length)