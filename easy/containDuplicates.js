// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function(nums) {
  // sort the array of numbers into ascending order:
  sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
          return true;
      }
  }
  return false;
};

// test case:

nums = [2,14,18,22,22];
containsDuplicate(nums);