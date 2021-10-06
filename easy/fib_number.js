// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that the each number is the sum of the two preceding ones, starting from 0 and 1. That is:

// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

const fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1; 

  let a = 0;
  let b = 1;
  let sum = a + b;

  while (n > 1) {
    sum = a + b;
    a = b;
    b = sum;

    n--;
  }
  return sum;
};

// test case: 
n = 5;
fib(n);