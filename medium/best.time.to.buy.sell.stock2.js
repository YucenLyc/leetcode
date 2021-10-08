// YOu're given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find the return the maximum profit you can achieve. 

const maxProfit = function (prices) {
  let profit = 0;
  prices.forEach((element, i) => {
    if (element < prices[i + 1]) {
      profit += prices[i + 1] - element;
    }
  })
  console.log(profit)
  return profit;
};

// test case: 
prices = [6, 1, 3, 2, 4, 7]
maxProfit(prices);

// 1 - 5 = 4
// 3 - 6 = 3 // 7