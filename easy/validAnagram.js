// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// const isAnagram = function (s, t) {
//   let sortedS = s.split('').sort().join('');
//   let sortedT = t.split('').sort().join('');
//   if (sortedS === sortedT){
//     console.log(true)
//     return true;
//   }
//   console.log(false)
//   return false;
// };


const isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  // adding the letter and counts of the first string into a data structure and later use it to make comparision to the second string:
  let letterCount = {};

  for (let letter of s) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } 
    letterCount[letter]++;
    
  };
  // looping the second string and compare:
  for (let letter of t) {
    if (letterCount[letter] === undefined) {
      console.log(false)
      return false;
    }
    // check if the counts are matching:
    if (letterCount[letter] < 1) {
      console.log(false)
      return false;
    }
    letterCount[letter]--;
  }
  console.log(true)
  return true;
}
// test case: 
s = "bbcca"
t = "bcaac";

isAnagram(s, t)

