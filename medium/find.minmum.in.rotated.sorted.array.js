// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

const findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
      if (nums[end] >= nums[start]) {
          return nums[start];
      };

      if (end - start === 1) {
          return nums[end];
      };

      if (nums[end] < nums[mid]) {
          start = mid;
      } else {
          end = mid;
      };

      mid = Math.floor((start + end) / 2);
  }
};

// test case: 
nums = [3,4,5,1,2]
findMin(nums);