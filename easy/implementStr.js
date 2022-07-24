// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = function (haystack, needle) {
  if (needle === '' || needle === haystack) {
    return 0;
  };
  if (haystack.length < needle.length) {
    return -1;
  };

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]){
      for (let k = 0; k < needle.length; k++){
        //console.log(haystack[i])
        if(haystack[i+k] !== needle[k]){
          break;
        } else {
          // if (haystack[i+k] === needle[k])
          // This means the entire needle is in the haystack:
          if (k === needle.length - 1){
            console.log(i)
            return i;
          }
        }
      } 
    } 
  }
  console.log("-1")
  return "-1";
}


haystack = "mississippi";
needle = "issip";
strStr(haystack, needle); // output: 4
