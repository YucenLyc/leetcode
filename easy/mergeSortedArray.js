// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = function(nums1, m, nums2, n) {
    let first = m - 1; // 3 
    let second = n - 1; // 6 
    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }
        if (nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
};

nums1 = [1,2,3,0,0,0], 
m = 3, 
nums2 = [2,5,6], 
n = 3,
console.log(merge(nums1, m, nums2, n)); 
// expected output: [1,2,2,3,5,6]
// [1,2,3] + [2,5,6]