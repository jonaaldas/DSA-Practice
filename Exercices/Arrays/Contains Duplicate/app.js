// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Given a list of numbers that is stored in an array, return true if there are at least one number that repeats its self. If there are no numbers return false



// 1. Rewrite the problem in your own words
// 2. Validate that you understand the problem
// 3. Write your own test cases
// 4. Pseudocode
// 5. Code!


let nums = [1, 2, 3, 1]

const containsDuplicate = function (nums) {
  const set = new Set(nums)
  if (set.size === nums.length) {
    return false
  }
  return true
};

containsDuplicate(nums)