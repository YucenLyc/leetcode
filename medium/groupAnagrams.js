// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

const groupAnagrams = function(strs) {
  let anagramCheck = {};
  let str = "";
  for (let i = 0; i < strs.length; i++) {
      // sort each string alphabetically so that the anagrams would equal to each other:
      str = strs[i].split('').sort().join('');
      if (!anagramCheck[str]) {
          anagramCheck[str] = [strs[i]]
      } else {
          anagramCheck[str].push(strs[i])
      }
  }
  let result = [];
  for (let i in anagramCheck) {
      result.push(anagramCheck[i])
  }
  return result;
};

// test case:
strs = ["eat", "tea", "tan", "ate", "nat"]
groupAnagrams(strs);