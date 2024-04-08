/**
 * 1929. Concatenation of Array
 *
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.



Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]


Constraints:

n == nums.length
1 <= n <= 1000
1 <= nums[i] <= 1000
 */

// NAIVE APPROACH
function getConcatenation(nums) {
  const n = nums.length;
  const ans = [];

  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
  }

  for (let i = 0; i < n; i++) {
    ans.push(nums[i]);
  }

  return ans;
}

var nums = [1, 3, 2, 1];
console.log(getConcatenation(nums));

// SHORT APPROACH
function getConcatenation(nums) {
  return [...nums, ...nums];
}

var nums = [1, 3, 2, 1];
console.log(getConcatenation(nums));

// ANOTHER SHORT APPROACH
function getConcatenation(nums) {
  return nums.concat(nums);
}

var nums = [1, 3, 2, 1];
console.log(getConcatenation(nums));

// OPTIMIZED APPROACH
function getConcatenation(nums) {
  const arrLength = nums.length;
  const ans = new Array(arrLength * 2);

  for (let i = 0; i < arrLength; i++) {
    ans[i] = nums[i];
    ans[i + arrLength] = nums[i % arrLength];
  }
  return ans;
}

var nums = [1, 3, 2, 1];
console.log(getConcatenation(nums));
