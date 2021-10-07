// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

const tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1; 
  if (n === 2) return 1;

  let a = 0;
  let b = 1; 
  let c = 1;
  let sum = a + b + c;

  while (n > 2) {
    sum = a + b + c;
    a = b;
    b = c;
    c = sum;
    n--;
  }
  console.log(sum);
  return sum
};

// test case:
n = 25;
tribonacci(n);