let arr = [1, 45, 67, 8, 9, 3, 4, 556, 76, 8798, 2, 4, 78]
arr.sort((a, b) => a - b)
const binaySearch = (arr, l, r, x) => {
  while (l <= r) {
    let mid = l + (r - l) / 2
    let round = Math.round(mid)
    if (arr[round] === x) {
      return round
    } else if (arr[round] < x) {
      l = round + 1
    } else {
      r = round - 1
    }
  }
  return -1 
}

console.log(binaySearch(arr, 0, arr.length - 1, 76))