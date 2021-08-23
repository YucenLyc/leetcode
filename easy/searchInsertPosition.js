// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

const searchInsert = function(nums, target) {
  // need to set the start and the end of the array to be searched:
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
      mid = Math.floor((start + end) / 2);


      if (target > nums[mid]) {
          if (target < nums[mid + 1]) {
              return mid + 1;
          } else {
              start = mid + 1;
          }
      } else if (target < nums[mid]) {
          if (target > nums[mid - 1]) {

              return mid;
          } else {
              end = mid - 1;
          }

      } else if (target === nums[mid]) {
          return mid;
      }
  }
  console.log(start);
  return start;
};

nums = [1, 3, 5, 6];
target = 7;

searchInsert(nums, target);

