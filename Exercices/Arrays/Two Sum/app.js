// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// nums = [2,7,11,15], target = 9
// Input: nums = [3,2,4], target = 6
// nums = [3,3], target = 6
const twoSum = function(nums, target) {
  //  we are going to use two for loops
  // one is going to loop through the first elemebt and the other on is going to loop through the other elements
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
};

twoSum(nums, target)

// Time Complexity O(n^2) => O(N)
// Space Complexity O(1)