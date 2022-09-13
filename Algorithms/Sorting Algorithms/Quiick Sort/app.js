// Divide and Conquer

// 1st select element as a pivot element 
// 2nd partition or divide the elements into two groups 
// element that are less than or equal to pivot and eleent that are grater than your pivot 
// you put elements that are <= to the element to the left and elements that are >= to the right
// 3rd move the pivot between groups 
// 4th we repeat evrything again 
// key is recursion

// const arr = [1,4,5,78,45,2,10000]
// let arr =[1,5,7,5,2,1,10,34,23]
// function quickSort(arr){
//  if(arr.length < 2){
//   return arr
//  }
//  let pivot = arr[arr.length-1]
//  let left = []
//  let right = []
//  for (let i = 0; i < arr.length - 1; i++) {
//   if(arr[i] < pivot){
//     left.push(arr[i])
//   } else {
//     right.push(arr[i])
//   }
//  }
//  return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort(arr));

// Time Complexity O(n log n) / On^2








let arr =[1,5,7,5,2,1,10,34,23]

const quickSort = (array) => {
  if(array.length < 2){
    return array
  }

  let pivot = array[array.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < array.length - 1; i++) {    
    if(array[i] < pivot){
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(arr));