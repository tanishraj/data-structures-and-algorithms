// Find how many students are working in start and end time slot
var startTime = [12, 2, 3, 1, 9];
var endTime = [4, 6, 8, 5, 10];

var query = 6;

function countStudent(startTime, endTime, query) {
  var count = 0;
  startTime.forEach((item, index) => {
    if (item <= query && endTime[index] >= query) {
      count++;
    }
  });
  return count;
}

console.log(countStudent(startTime, endTime, query));
