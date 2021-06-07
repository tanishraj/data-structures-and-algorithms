// Map method custom implementation
Array.prototype.customMap = function (func) {
  var result = [];
  var input = this;

  for (var i = 0; i < input.length; i++) {
    result.push(func(input[i], i));
  }

  return result;
};

var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.customMap((item) => {
  return item * 2;
});

console.log(newArr);
