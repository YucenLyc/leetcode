// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

const insert = function (intervals, newInterval) {
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    // if overlaps: 
    if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
      newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
      continue;
    }

    // if newInterval is lower:
    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }

    result.push(interval);
  }
  result.push(newInterval);
  return result;
};


// test case:
intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
newInterval = [4, 8]  // [[1,2], [3,10], [12,16]]
insert(intervals, newInterval);

