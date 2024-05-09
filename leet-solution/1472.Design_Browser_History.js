/**
 * 1472. Design Browser History
 *
 * You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
 

Example:

Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

Explanation:
BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");       // You are in "leetcode.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"

 */

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.current = 0;

  console.log(this.history);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history.splice(this.current + 1, 0, url);
  this.current = this.current + 1;
  this.history.length = this.current + 1;
  console.log("VISIT: ", this.history, this.current);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (this.current - steps < 0) {
    this.current = 0;
    console.log(
      "BACKWARD: ",
      "Step:",
      steps,
      this.history,
      this.current,
      this.history[this.current]
    );
    return this.history[this.current];
  }

  this.current = this.current - steps;
  console.log(
    "BACKWARD: ",
    "Step:",
    steps,
    this.history,
    this.current,
    this.history[this.current]
  );
  return this.history[this.current];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (this.current + steps >= this.history.length) {
    this.current = this.history.length - 1;
    console.log(
      "FORWARD: ",
      "Step:",
      steps,
      this.history,
      this.current,
      this.history[this.current]
    );
    return this.history[this.current];
  }

  this.current = this.current + steps;
  console.log(
    "FORWARD: ",
    "Step:",
    steps,
    this.history,
    this.current,
    this.history[this.current]
  );
  return this.history[this.current];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

var browserHistory = new BrowserHistory("leetcode.com");
console.log(browserHistory.visit("google.com")); // You are in "leetcode.com". Visit "google.com"
console.log(browserHistory.visit("facebook.com")); // You are in "google.com". Visit "facebook.com"
console.log(browserHistory.visit("youtube.com")); // You are in "facebook.com". Visit "youtube.com"
console.log(browserHistory.back(1)); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(browserHistory.back(1)); // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(browserHistory.forward(1)); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
console.log(browserHistory.visit("linkedin.com")); // You are in "facebook.com". Visit "linkedin.com"
console.log(browserHistory.forward(2)); // You are in "linkedin.com", you cannot move forward any steps.
console.log(browserHistory.back(2)); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
// console.log(browserHistory.back(7))                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
