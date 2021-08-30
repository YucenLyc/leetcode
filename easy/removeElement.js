// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

const removeElement = function(nums, val) {

  let i = 0;
  for (let ele of nums) {

      if (ele != val) {
          nums[i] = ele;
          i++;
      }
  }
  return i;
}
nums = [2, 2, 3, 2, 1, 5, 6];
val = 3;
removeElement(nums, val);

