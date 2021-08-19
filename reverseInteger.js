const reverse = function(x){
  let negative = x < 0;
  let reversed =0;
  // if the number is negative, need to change it to positive first:
  if(negative) {
    x = x * -1;
  }

  while (x > 0) {
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  //if x is bigger than the signed 21 bit integer range, we return 0:
  if (reversed > (2**31 - 1)) {
    return 0;
  }

  //what to do for x that are negative? 
  //need to put the negative back after reversing x:
  return negative? (reversed * -1) : reversed;
}