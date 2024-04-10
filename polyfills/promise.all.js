// Promise.all()

var promise1 = new Promise((resolve, reject) => {
  resolve(1);
});

var promise2 = new Promise((resolve, reject) => {
  resolve(2);
});

var promise3 = new Promise((resolve, reject) => {
  resolve(3);
});

var promiseArray = [promise1, promise2, promise3];

Promise.all(promiseArray).then((values) => {
  console.log(values);
});

// Pollyfill for Promise.all()
const customAll = function (promiseArray) {
  return new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;

    promiseArray.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;

          if (total === promiseArray.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

customAll(promiseArray).then((values) => {
  console.log("HELLO", values);
});
