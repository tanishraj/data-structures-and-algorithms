/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0
*/

var coins = [1, 2, 5],
  amount = 11;

var coinChange = function (coins, amount) {
  var arr = Array.from({ length: amount + 1 }, () => amount + 1);
  arr[0] = 0;

  for (var i = 0; i < coins.length; i++) {
    for (var j = coins[i]; j <= amount; j++) {
      arr[j] = Math.min(arr[j], arr[j - coins[i]] + 1);
    }
  }

  return arr[amount] <= amount ? arr[amount] : -1;
};

console.log(coinChange(coins, amount));
