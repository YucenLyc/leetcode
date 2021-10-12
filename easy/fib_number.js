// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that the each number is the sum of the two preceding ones, starting from 0 and 1. That is:

// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

// const fib = function(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1; 

//   let a = 0;
//   let b = 1;
//   let sum = a + b;

//   while (n > 1) {
//     sum = a + b;
//     a = b;
//     b = sum;

//     n--;
//   }
//   console.log(sum)
//   return sum;
// };

// MEMORIZATION:
// create a js object, keys will be arg to fn, value will be the return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// test case: 
n = 13;
console.log(fib(n));