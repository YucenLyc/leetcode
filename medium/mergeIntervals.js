const merge = function(intervals) {
  // sort the array in order:
  intervals.sort((a, b) => a[0] - b[0]);
  // to store the final intervals:
  let result = [];
  // first loop, loop through the interval array:
  for (let i = 0; i < intervals.length; i++) {
      if (result.length === 0) {
          result.push(intervals[i])
      };

      let isMerge = false;
      for (let k = 0; k < result.length; k++) {

          if (result[k][1] >= intervals[i][0]) {
              result[k] = [result[k][0], Math.max(result[k][1], intervals[i][1])];
              isMerge = true;
              break;
          }
      }
      if (!isMerge) {
          result.push(intervals[i]);
      }
  }
  //console.log(result);
  return result;
};

// test case:
intervals = [
  [1, 3],
  [2, 6]
]
merge(intervals);