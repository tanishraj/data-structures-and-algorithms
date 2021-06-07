/*
Promise:
Promise is an object which will produce a value/ a reason in future.
*/

// Promise Example:
var promise1 = new Promise((resolve, reject) => {
  resolve("4");
})
  .then((res) => {
    console.log(res);
    return "5";
  })
  .then((res) => {
    console.log(res);
    return "6";
  })
  .catch((error) => {
    console.log(error);
  });

/*
Steps to create Custom Promise implementaion:
----------------------------------------------------------------
1) Promise is a class, so create a class
2) Promise accepts a function as a parameter, so create a function 'executeFunction' on constructor
3) That function accepts two functions as parameter => create two functions resolve, reject on constructor
4) To achieve promise chainging we need an array => Create an empty array on constructor called as PromiseChain
5) create a function that can handle error => create a handleError method on constructor

Writing definition for all functions declared in constructor
----------------------------------------------------------------
6) reject method => accepts an error and call handleError function with error as an argument
7) catch method => accepts an error and call handleError function with error as an argument and return the promise
8) then method => accepts a function and push that function on promiseChain array
9) resolve method => gets a value/response and then pass that value/response to nextfunction available on the promiseChain array
10) if any error happens in resolve methods, promiseChain will be [] and onReject method will be called here.
*/

class CustomPromise {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.executionFunction = executionFunction(this.resolve, this.reject);
  }

  resolve(value) {
    var storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];
      this.reject(error);
    }
  }

  reject(error) {
    this.handleError(error);
  }

  catch(error) {
    this.handleError(error);
    return this;
  }

  then(callback) {
    this.promiseChain.push(callback);
    return this;
  }
}
