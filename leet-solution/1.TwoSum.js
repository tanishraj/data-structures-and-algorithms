/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]


Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

var nums = [3, 2, 4];
var target = 6;

// var nums = [3, 3];
// var target = 6;

// var nums = [2, 5, 5, 11];
// var target = 10;

// Naive Approach
var twoSum = function (nums, target) {
  let i = 0;

  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    } else if (j === nums.length - 1) {
      i++;
      j = i;
    }
  }

  return "Tough Luck :(";
};

console.log(twoSum(nums, target));

// Second Approach
var twoSum2 = function (nums, target) {
  var result = [];
  var map = new Map();

  for (let i = 0; i < nums.length; i++) {
    var difference = target - nums[i];

    if (map.has(difference)) {
      result[0] = map.get(difference);
      result[1] = i;
    } else {
      map.set(nums[i], i);
    }
  }

  return result;
};

console.log(twoSum2(nums, target));

// Thied Approach
var twoSum3 = function (nums, target) {
  var cache = {};

  for (let i = 0; i < nums.length; i++) {
    var difference = target - nums[i];

    if (cache[difference] !== undefined) {
      return [i, cache[difference]];
    } else {
      cache[nums[i]] = i;
    }
  }
};

console.log(twoSum3(nums, target));
