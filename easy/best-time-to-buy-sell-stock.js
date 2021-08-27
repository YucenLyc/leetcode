// You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function(prices) {
  // set a default minimium buy price which will ensure to be bigger than the first number in prices:
  let minBuyPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
      if (price < minBuyPrice) {
          minBuyPrice = price;

      } else if (price - minBuyPrice > maxProfit) {
          maxProfit = price - minBuyPrice;
      }
  }
  console.log(maxProfit)
  return maxProfit;
};
prices =  [5, 7, 8, 9, 70]
maxProfit(prices);