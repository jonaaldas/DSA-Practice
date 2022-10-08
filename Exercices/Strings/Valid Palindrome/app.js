// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// s = "A man, a plan, a canal: Panama"
// s = "raceacar"
s = 'ccdadcc';
const isPalindrome = function (s) {
	s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
	let leftIndex = 0;
	let rightIndex = s.length - 1;
	while (leftIndex < rightIndex) {
		if (s[leftIndex] !== s[rightIndex]) {
			return false;
		}
		leftIndex++;
		rightIndex--;
	}
	return true;
};

// Time Complexity O[N]
// Space Complexity O[1]
console.log(isPalindrome(s));
