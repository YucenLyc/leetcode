// Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as argumetns

// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum. 

// brute force solution: 
// const bestSum = function(targetSum, numbers) {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   let shortestCombination = null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderCombination = bestSum(remainder, numbers);

//     if(remainderCombination !== null) {
//       const combination = [...remainderCombination,num]
//       // if the combination is shorter than the current shortest combination:
//       if (shortestCombination === null||combination.length < shortestCombination.length){
//         shortestCombination = combination;
//       };
//     }
//   }
//   // if nothing generated, then return null
//   return shortestCombination;
// };

// memoization solution: 
const bestSum = function (targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

// Test Case: 
targetSum = 8
numbers = [2, 3, 5]

console.log(bestSum(targetSum, numbers));
