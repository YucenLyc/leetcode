// write a function 'howSum(targetSum, numbers)' that takes in a target sum and an array of numbers as arguments.  

// brute force solution:
const howSum = function(targetSum, numbers) {
  if (targetSum === 0) return [];
  if (targetSum < 0 ) return null; // if the remainder goes negative 

  for (let num of numbers){
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if(remainderResult !== null) {
      return[ ...remainderResult, num]; //spread operator
    }
  }
  return null;
};

// test case: 
targetSum = 8; 
numbers = [2,3,5];
console.log(howSum(targetSum, numbers));