// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubstring = 0;

  // iterate over the string:
  while (right < s.length) {
      // check if the set has the letter the right pointer is on:
      if (!set.has(s.charAt(right))) {
          set.add(s.charAt(right));
          maxSubstring = Math.max(maxSubstring, set.size); //set.size is the current substring 
          right++;
      } else {
          // when there is a duplicate in the current substring:
          set.delete(s.charAt(left));
          left++;
      }
  }
  return maxSubstring;
};

// test case:
s = "abca";
lengthOfLongestSubstring(s);