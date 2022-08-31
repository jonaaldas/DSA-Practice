// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Psudo Code
// create a for loop
// we create a new map
//  to loop the first one 
// create a second loop to lop the other elements 
// we add the index to the map as a key and the value if going to be how many time did we see it?
nums = [3,2,3]
// nums = [2, 2, 1, 1, 1, 2, 2]
const majorityElement = function (nums) {
  //  create a object 
  // create a variable for the counter and the max number
  // do a loop to add all the element of the array to the map with the key as the index and value the number of time it apears
  // loop throug the map and if the value > counter 
  // counter to the value
  // max to the value

  const map = {}
  let counter =0, max = 0
  for(let num of nums){
    if(!map[num]){
      map[num] = 1
    } else {
      map[num]++
    }
  }
  // console.log(map)
  for(let j in map){
    if(map[j] > counter){
      counter = map[j]
      max = j
    }
  }
  console.log(max)
  return max
};
majorityElement(nums)