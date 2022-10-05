// is another divide and conquer algorithms
// recursion
// https://www.youtube.com/watch?v=wXZyuJqNk9U

const mergeSort = (arr) =>{
  if(arr.length < 2){
    return arr
  }

  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0,mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const arr = []

  while(left.length && right.length){
    if(left[0] <= right[0]){
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left,...right]
}

const arr = [4,78,4,2,90,-1,9]

console.log(mergeSort(arr))