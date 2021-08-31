// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

const productExceptSelf = function(nums) {

  let leftArray = [];
  let Left = 1;

  for (let i = 0; i < nums.length; i++) {
      leftArray[i] = Left;
      Left *= nums[i];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
      leftArray[i] *= right;
      right *= nums[i];

  }
  return leftArray
};

//test case:
nums = [5,1,2,1]
productExceptSelf(nums);