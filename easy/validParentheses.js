// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = function(s) {
  if (s === "") {
      return false;
  }
  if (s.length < 2) {
      return false;
  }
  //need to check for matching brackets: 
  //map the correct brackets:
  const correctBrackets = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  const result = [];

  for (let i = 0; i < s.length; i++) {
      let currentEle = s[i];

      if (currentEle === '(' || currentEle === '{' || currentEle === '[') {
          result.push(currentEle)
          console.log(currentEle)
      } else {
          currentBracket = result.pop();
          if (correctBrackets[currentBracket] !== currentEle) {
              return false;
          }
      }
  }
  //if there's element left: false, otherwise: result.length === 0 and it is true
  return result.length === 0
}


s = "()[]{}";
console.log(isValid(s));
