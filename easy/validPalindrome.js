// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

const isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  let k = s.split("").reverse().join("");
  if (s === k) {
      return true;
  };
  return false;
};

// test case:
s = "race a car";
isPalindrome(s);