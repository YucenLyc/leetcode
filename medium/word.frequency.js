// Write a bash script to calculate the frequency of each word in a text file words.txt.

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

// test case: 
nums = [1, 1, 1, 2, 2, 3]
k = 2;
topKFrequent(nums, k);