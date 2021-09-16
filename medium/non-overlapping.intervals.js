// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping

const eraseOverlapIntervals = function(intervals) {
  function compare(a, b) {
      return a[1] - b[1];
  };
  intervals = intervals.sort(compare);
  // console.log(intervals[0]);
  let prev = intervals[0]
  let count = 0;
  for (let i = 1; i < intervals.length; i++) {
      let curr = intervals[i]
      if (prev[1] > curr[0]) {
          count++;
      } else {
          prev = curr;
      }
  }
  return count;
};

// test case: 
intervals =[[1,2],[2,3],[3,4],[1,3]]
eraseOverlapIntervals(intervals); //expected output:1