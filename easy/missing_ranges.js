// You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

// Return the smallest sorted list of ranges that cover every missing number exactly. 
//That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

const findMissingRanges = function (nums, lower, upper) {
  // set an array of ranges for all the missing numbers 
  const ranges = [];

  // handling the edge case of nums being empty 
  if (!nums.length) {
    ranges.push([lower, upper]);
  }

  // for each n in nums, if the current low is lesser than n, add the range between the current low and n-1 to the array of ranges for
  for (let i = 0; i < nums.length; i++) {
    const next = nums[i];
    if (next > lower) {
      ranges.push([lower, next - 1]);
      // the next low becomes n + 1 \
    }
    lower = next + 1;
    
  }
    // handling the range of numbers btw the last number in the nums and the upper bound
    const last = nums[nums.length - 1]
    if (last < upper) {
      ranges.push([last + 1, upper]);
    }
    // make the return array according to question request 

    return ranges.map(r => (r[0] === r[1]) ? r[0].toString() : `${r[0]}->${r[1]}`)
    
}



nums = [0, 1, 3, 50, 75]
lower = 0;
upper = 99;

console.log(findMissingRanges(nums, lower, upper));
