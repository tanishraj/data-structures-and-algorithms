/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Input: m = 3, n = 7
Output: 28


Example 2:
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

var m = 3,
  n = 2;

var m = 3,
  n = 7;

var uniquePaths = function (m, n) {
  var result = [];
  for (var i = 0; i < m; i++) {
    result.push([1]);
  }

  for (var j = 0; j < n; j++) {
    result[0][j] = 1;
  }

  for (var a = 1; a < m; a++) {
    for (var b = 1; b < n; b++) {
      result[a][b] = result[a - 1][b] + result[a][b - 1];
    }
  }

  return result[m - 1][n - 1];
};

console.log(uniquePaths(m, n));
