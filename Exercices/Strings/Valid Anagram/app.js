// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// psudocode
// create two has maps
// add the str to the map
// 
// const s = "anagram", t = "nagaram"
const s = "rat",t = "car"
const isAnagram = function (s, t) {
  let sSort = s.split("").sort().join('')
  let tSort = t.split("").sort().join('')
  console.log(sSort)
  console.log(tSort)
  if(sSort === tSort){
    return true
  } else {
    return false
  }
};

console.log(isAnagram(s, t))