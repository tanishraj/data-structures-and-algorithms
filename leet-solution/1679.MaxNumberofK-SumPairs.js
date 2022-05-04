/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.


Example 2:
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
*/

// const nums = [1, 2, 3, 4];
// const k = 5;

const nums = [3, 3, 1, 4, 3];
const k = 6;

// const nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
// const k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let operation = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    var sum = nums[left] + nums[right];
    if (sum === k) {
      operation++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return operation;
};

console.log(maxOperations(nums, k));
