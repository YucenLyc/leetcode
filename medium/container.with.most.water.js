// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

const maxArea = function(height) {
  let slow = 0;
  let fast = height.length - 1;

  let max = 0;
  while (slow < fast) {
      let curMax = Math.min(height[slow], height[fast]) * (fast - slow);

      max = Math.max(max, curMax);
      if (height[slow] < height[fast]) {
          slow++;
      } else {
          fast--;
      }
  }
  return max;
};


// test case:
height = [2, 3, 4, 5, 18, 17, 6];