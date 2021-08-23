// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// intuitive solution: 
const maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for(let i = 1; i < nums.length; i++){
    currentSum += nums[i];
    if (nums[i] > currentSum){
      currentSum = nums[i];
    }
    if (currentSum > maxSum){
      maxSum = currentSum;
    }
  }
  console.log(maxSum)
  return maxSum;
}

nums = [5,4,-1,7,8];
maxSubArray(nums);
