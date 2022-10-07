// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Ex1
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Ex2
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// ## Before you start coding:

// 1. Rewrite the problem in your own words
// 2. Validate that you understand the problem
// 3. Write your own test cases
// 4. Pseudocode
// 5. Code!

// My own words
// you get a list of values of the price of the stock in a given day [1,3,4,5,7,10]
// my job is to idneify when should i buy the cheapest and when should I sell for the most profit

// Validate that you understand the problem [done]

// pseducode
// for loop through the array
// createa variable to store the lowest number
// compare the number with all the elements int the array
// store the lowest in the variable

// createa variable to store the highest number after we find the index of the lowest number
// compare the number with all the elements int the array
// store the lowest in the variable

// broot force method

// PREP
// Paramaters
// Prices = [1,2,3,,3,4]
// returns the resutl  of the arary where the profit between two numbers is the highest
// Exampels =>  [7,1,5,3,6,4] =>
const maxProfit = (prices) => {
	let max = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			let profit = prices[j] - prices[i];
			if (profit > max) {
				max = profit;
			}
		}
	}
	console.log(max);
};

// const maxProfitBF = function (prices) {
//   let max = 0
//   for (let i = 0; i < prices.length - 1; i++) {
//     for(let j = i + 1; j < prices.length ; j++){
//       const profit = prices[j] - prices[i]
//       if(profit > max){
//         max = profit
//       }
//     }
//   }
//   return max
// };

const maxProfitEW = function (prices) {
	let max = 0;
	let min = Number.MAX_VALUE;
	console.log(min);

	for (const price of prices) {
		// min = Math.min(min, price)
		// max = Math.max(max, price - min)
		if (price < min) {
			min = price;
		} else if (price - min > max) {
			max = price - min;
		}
	}
	console.log(max);
};

// maxProfitEW([7,6,4,3,1])
maxProfit([7, 1, 5, 3, 6, 4]);
