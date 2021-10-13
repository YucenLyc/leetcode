// write a function "canSum (targetSum, numbers)" that takes in a targetSum and an array of numbers as arguments 
// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array

// ** you may use an element of the array as many times as you need **

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    //console.log(num)
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

// test case: 
targetSum = 7;
numbers = [2, 4, 3]
console.log(canSum(targetSum, numbers));
// expected output: true
