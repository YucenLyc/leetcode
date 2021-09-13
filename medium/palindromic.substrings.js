// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

const countSubstrings = function(s) {
  if (s.length === 0) {
      return 0;
  };
  let dp = [];
  for (let i = 0; i < s.length; i++) {
      dp[i] = Array(s.length).fill(false); // what is this line doing..
  }
  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      for (let k = i; k < s.length; k++) {
          if (s[i] === s[k] && (k - i <= 1 || dp[i + 1][k - 1])) {
              dp[i][k] = true;
              result++
          }
      }
  }
  return result;
};

s = "aaaaa";
countSubstrings(s); 













