// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required. 

const minMeetingRooms = function (intervals) {
  const start = [...intervals].map(([start, end]) => start).sort((a, b) => a - b);
  const end = [...intervals].map(([start, end]) => end).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (start[i] >= end[0]) end.shift();
  }
  return end.length;
};

// test case: 
intervals = [[6, 15], [13, 20], [6, 17]];
minMeetingRooms(intervals);