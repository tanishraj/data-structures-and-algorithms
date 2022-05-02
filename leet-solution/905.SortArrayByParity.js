/*
  Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

  Return any array that satisfies this condition.

Example 1:
  Input: nums = [3,1,2,4]
  Output: [2,4,3,1]
  Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:
  Input: nums = [0]
  Output: [0]

*/

// Naive Approach
const nums = [3, 1, 2, 4];

var sortArrayByParity = function (nums) {
  if (nums.length === 1) return nums;
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      result.push(nums[i]);
    } else {
      result.unshift(nums[i]);
    }
  }

  return result;
};

console.log(sortArrayByParity(nums));

// Optimized approach
const nums2 = [3, 1, 2, 4];

var sortArrayByParity2 = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      var temp = nums[index];
      nums[index++] = nums[i];
      nums[i] = temp;
    }
  }

  return nums;
};

console.log(sortArrayByParity2(nums2));
