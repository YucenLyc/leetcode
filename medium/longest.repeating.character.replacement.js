// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

const characterReplacement = function(s, k) {
  let map = new Map(),
      len = s.length,
      max = 0,
      repeatMax = 0,
      windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
      let rightChar = s[windowEnd];
      
      if(!map[rightChar]) map[rightChar] = 0;
      map[rightChar] += 1;
      
      repeatMax = Math.max(repeatMax, map[rightChar])
      while (windowEnd - windowStart + 1 - repeatMax > k) {
          let leftChar = s[windowStart];
          map[leftChar] -= 1;
          windowStart ++;
      }
      max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max
};

// test case:
s = "ABC";
k = 1;
characterReplacement(s,k);
 