/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:
Input: nums = [1,2,3,4]
Output: 0
Example 3:

Example 3:
Input: nums = [1]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// const nums = [1, 2, 3, 4];
const nums = [2, 6, 4, 8, 10, 9, 15, 10];
// const nums = [1];

var findUnsortedSubarray = function (nums) {
  var n = nums.length;
  var start = -1;
  var end = -2;

  var max = nums[0];
  var min = nums[n - 1];

  for (let i = 0; i < n; i++) {
    var j = n - i - 1;

    max = Math.max(max, nums[i]);
    if (max > nums[i]) end = i;

    min = Math.min(min, nums[j]);
    if (min < nums[j]) start = j;
  }

  return end - start + 1;
};

console.log(findUnsortedSubarray(nums));
