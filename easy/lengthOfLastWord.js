// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const LengthOfLastWord = function(s) {
  let newStr = s.split(" ");
  for (let i = newStr.length - 1; i >= 0; i--) {
      if (newStr[i] === "") {
          continue;
      } else {
          return newStr[i].length;
      }
  };
}
// test cases:
s = "   fly me   to   the moon  ";
LengthOfLastWord(s)
