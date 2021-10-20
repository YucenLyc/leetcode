// write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings and
// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array. 

//intuitive solution: 
// const canConstruct = (target, wordBank) => {
//   if (target.length === 0) return true; 
  
//   for(let word of wordBank){
//     // check if a substring is the prefix of the target:
//     if (target.indexOf(word) === 0) {
//       // give the string after deducting the prefix:
//       const suffix = target.slice(word.length);
//       if(canConstruct(suffix, wordBank) === true) {
//         return true;
//       };
//     }
//   }
//   return false;
// };

// memoization solution:
const canConstruct = (target, wordBank, memo={}) => {
  if (target.length === 0 ) return true;
  if (target in memo) return memo[target];

  for (let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if(canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}
// test case: 
target = "skateboard"; 
workBank = ["a", "p", "ent", "enter", "ot", "o", "t"]; 
console.log(canConstruct(target, workBank));