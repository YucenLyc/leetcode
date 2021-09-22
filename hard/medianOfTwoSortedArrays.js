// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. 

const findMedianSortedArrays = function (nums1, nums2) {
  const merged = nums1.concat(nums2);
  merged.sort((a, b) => a - b);
  if (merged.length % 2 === 0) { // it's an even numbered array
    let midpoint1 = merged.length / 2
    let midpoint2 = midpoint1 - 1;
    let median = ((merged[midpoint1] + merged[midpoint2]) / 2);
    return median
  }
  let midpoint = (merged.length / 2) - 0.5
  median = merged[midpoint];
  return median
};
// test case: 
nums1 = [1, 3];
nums2 = [2];
findMedianSortedArrays(nums1, nums2);