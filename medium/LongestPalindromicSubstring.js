// Given a string s, return the longest palindromic substring in s:
const longestPalindrome = function(s) {
  let longest = ''

  const getLongest = (l,r) => {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      if(r - l + 1 > longest.length) {
        longest = s.slice(l, r+1);
      }
      l--; r++;
    }
  }
  for(let i = 0; i < s.length; i++){
    getLongest(i,i);
    getLongest(i,i+1); 
  }
  console.log(longest)
  return longest;
};
//test case: 
s = "babad";
longestPalindrome(s)
// output: "bab"