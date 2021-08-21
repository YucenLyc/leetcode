// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// two pointers solution:

const removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;

};

nums = [1, 1, 2, 2, 2, 3, 4]
removeDuplicates(nums);