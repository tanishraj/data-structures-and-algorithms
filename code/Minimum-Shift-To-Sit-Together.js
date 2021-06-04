/*
-----------------------------------------------------
Minimum jumps required to make a group of persons
sit together
-----------------------------------------------------
Input: S = “. . . . x . . x x . . . x . .”
Output: 5
Explanation: Below are the required shuffling of
occupants:
Step 1: Make the person at 5th seat jump 2 places
to the 7th seat.
Step 2: Make the person at 13th seat jump 3 places
to the 10th seat.
Therefore, total number of jumps required = 2 + 3
= 5.

Input: S = “xxx........xxxxxx”
Output: 24
Explanation: Move the occupants from 1st,
2nd and 3rd position to the 9th, 10th, 11th
positions respectively. Therefore, the total
number of jumps required = (11 – 3) + (10 – 2)
+ (9 – 3) = 24.
-----------------------------------------------------
*/

function minShift(seat) {
  var position = [];
  var count = 0;
  var len = seat.length;

  for (let i = 0; i < seat.length; i++) {
    if (seat[i] === "x") {
      position.push(i - count);
      count++;
    }
  }

  if (count === len || count === 0) return 0;

  let med_index = parseInt((count - 1) / 2, 10);

  let med_val = position[med_index];

  let ans = 0;

  for (let j = 0; j < position.length; j++) {
    ans = ans + Math.abs(position[j] - med_val);
  }

  console.log(ans);
}

// var seat = 'xxx........xxxxxx';
var seat = "....x..xx...x..";
console.log(minShift(seat));
