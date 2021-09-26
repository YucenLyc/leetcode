// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

const canAttendMeetings = function (intervals) {

  intervals.sort(function (a, b) {
    return a[0] - b[0]
  });
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
};

// test case: 
intervals = [[0, 30], [5, 10], [15, 20]]
canAttendMeetings(intervals);