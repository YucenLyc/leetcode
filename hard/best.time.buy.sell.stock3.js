// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete at most two transactions.

const maxProfit = function(price) {
  let n = price.length
  let profit = [];
  for(let i = 0; i < n; i++)
      profit[i] = 0
  let max_price = price[n - 1];
  for(let i = n - 2; i >= 0; i--){
      if (price[i] > max_price)
          max_price = price[i]
      profit[i] = Math.max(profit[i + 1],
                          max_price - price[i]);
  }
  let min_price = price[0];
  for(let i = 1; i < n; i++){
      if (price[i] < min_price)
          min_price = price[i];
      profit[i] = Math.max(profit[i - 1],
              profit[i] + (price[i] - min_price));
  }
 

  return profit[n-1];
};
// test case: 
price = [1, 2]
maxProfit(price);