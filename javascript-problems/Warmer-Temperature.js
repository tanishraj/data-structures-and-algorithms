function getWarmerDays(temperatureList) {
  var daysList = [];

  var startDay = 0;
  var days = 0;

  for (var i = 1; i < temperatureList.length; i++) {
    if (temperatureList[startDay] < temperatureList[i]) {
      daysList.push(days);
      days = 0;
      startDay++;
    } else {
      days++;
    }
  }

  return daysList;
}

var temperatureList = [73, 74, 75, 71, 69, 72, 76, 73]; // [0, 0, 3, 0]
console.log(getWarmerDays(temperatureList));
