// naive sorting algorithms

// repeat
// check each element in the arr
// get smallest element 
// swap with first position

// const arr = [1, 2, 4,24,0,-1, 777]
// let arrLength = arr.length
// const selctionSort = (arr, arrLength) => {
//   for(let i = 0; i < arrLength - 1; i++){
//     let min = i
//     for(let j = i + 1 ; j < arrLength; j++){
//       if(arr[j] < arr[min]){
//         min = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp
//   }
//   console.log(arr)
// }
// selctionSort(arr, arrLength)

const arr = [3,8,12,56,78,90,100,-1]
const length = arr.length

const selectionSort = (arr, length) => {
  for (let i = 0; i < length - 1; i++) {
    let min = i
    for (let j = i + 1; j < length; j++) {
      if(arr[j] < arr[min]){
        min = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}


console.log(selectionSort(arr, length));