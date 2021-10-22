// write a function 'allConstruct(target, wordBank)'that accepts a target string and an array of strings 
// the function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank'array. Each element of the 2D array should represent one combination that constructs the 'target'

// const allConstruct = (target, wordBank) => {
//   if (target === '') return [[]];

//   const result = [];

//   for (let word of wordBank) {
//     //check if a substring is the prefix of the target: 
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank);

//       // return the prefix and the rest of the word:
//       const targetWays = suffixWays.map(way => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }
//   return result;
// }

//memoization solution: 

const allConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    //check if a substring is the prefix of the target: 
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);

      // return the prefix and the rest of the word:
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  };
  memo[target] = result;
  return result;
};
// test case:
target = 'purple';
wordBank = ['purp', 'p', 'ur', 'le', 'purpl']
console.log(allConstruct(target, wordBank));