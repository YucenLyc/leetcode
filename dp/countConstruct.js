// Write a function 'countConstruct(target, wordBank)' that accept a target string and an array of strings 

// the function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array 

// You may use the elements in 'wordBank' as many times as needed

//brute force solution: 
const countConstruct = (target, wordBank, memo={}) => {
  if(target in memo) return memo[target];
  if(target === '') return 1;
  

  let totalCount = 0;

  for(let word of wordBank) {
    //check if it is a prefix:
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  };
  memo[target] = totalCount;
  return totalCount;
};

// test case:
target = "abcdef"
wordBank = ["ab", "abc", "cd", "def", "abcd"]
console.log(countConstruct(target, wordBank));

console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed',['e', 'ee', 'eee', 'eeee', 'eeeeee', 'eeeeeeee', 'eeeeeeeee', 'eeee']))