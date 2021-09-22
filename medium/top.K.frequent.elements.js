// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach(ele => {
    if (map[ele]) {
      map[ele]++;
    } else {
      map[ele] = 1
    }
  });
  return (Object.entries(map).sort((a, b) => b[1] - a[1]).map(val => Number(val[0])).slice(0, k));
};