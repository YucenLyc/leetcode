//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

const removeElement = function(nums, val) {
  while (nums.includes(val)){
      nums.splice(nums.indexOf(val),1);
  }
  console.log(nums)
  return nums;
};

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
removeElement(nums, val);
