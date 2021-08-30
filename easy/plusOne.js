//  Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

const plusOne = function(digits) {
  let i = digits.length - 1;
  while (digits[i] === 9) {
      digits[i] = 0;
      i--;
  }
  if (i < 0) {
      digits[0] = 1;
      digits.push(0);
  } else {
      digits[i] += 1;
  }
  console.log(digits);
  return digits;
};

digits = [1,9];
plusOne(digits);