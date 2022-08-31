// Divide and Conquer

// 1st select element as a pivot element 
// 2nd partition or divide the elements into two groups 
// element that are less than or equal to pivot and eleent that are grater than your pivot 
// you put elements that are <= to the element to the left and elements that are >= to the right
// 3rd move the pivot between groups 
// 4th we repeat evrything again 
// key is recursion

const arr = [1,4,5,78,45,2,10000]
function quickSort(arr){
 if(arr.length < 2){
  return arr
 }
 let pivot = arr[arr.length-1]
 let left = []
 let right = []
 for (let i = 0; i < arr.length - 1; i++) {
  if(arr[i] < pivot){
    left.push(arr[i])
  } else {
    right.push(arr[i])
  }
 }
 return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr));

// Time Complexity O(n log n) / On^2