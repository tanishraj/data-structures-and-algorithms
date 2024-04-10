var arr = [1, 2, 3, 4];

function reduceExample(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

console.log("Builtin Reduce Example", reduceExample(arr));

Array.prototype.customReduce = function (callback, initialValue) {
  const inputArray = this;
  let output = initialValue;

  for (let i = 0; i < inputArray.length; i++) {
    output = callback(output, inputArray[i]);
  }

  return output;
};

var customReduceExample = [1, 2, 3, 4].customReduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  },
  0
);

console.log("Custom Reduce Example", customReduceExample);
