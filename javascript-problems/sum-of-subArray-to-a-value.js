function getWatchList(flightTime, movieList) {
  var watchList = [];
  var sum = 0;

  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i] === flightTime) {
      watchList.push(movieList[i]);
      return watchList;
    }

    sum = sum + movieList[i];
    if (sum < flightTime) {
      watchList.push(movieList[i]);
    } else if (sum > flightTime) {
      sum = sum - movieList[i];
    } else {
      watchList.push(movieList[i]);
      return watchList;
    }
  }

  return sum === flightTime ? watchList : undefined;
}

var flightTime = 160;
var movieList = [40, 110, 30, 10, 20];
var movieList2 = [170, 190, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 60];
console.log(getWatchList(flightTime, movieList2));
