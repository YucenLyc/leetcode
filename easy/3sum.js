// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = function(nums) {
  // taking care of edge cases: 
  if (nums.length === 0) {
      return [];
  };

  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
          let start = i + 1;
          let end = nums.length - 1;
          let sum = -nums[i];

          while (start < end) {
              if (nums[start] + nums[end] === sum) {
                  result.push([nums[i], nums[start], nums[end]]);
                  // making sure there's no duplicates:
                  while (start < end && nums[start] === nums[start + 1]) start++
                  while (start < end && nums[end] === nums[end - 1]) end--
                  start++;
                  end--;
              } else if (sum < (nums[start] + nums[end])) {
                  end--;
              } else {
                  start++;
              }

          }
      }

  }
  console.log(result)
  return result;

};

// test case:
nums = [-2, 0, 1, 1, 2]
threeSum(nums);