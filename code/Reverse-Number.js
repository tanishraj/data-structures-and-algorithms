function reverseNumber(num) {
  var reverse = 0;

  while (num !== 0) {
    var remainder = num % 10;
    num = Math.floor(num / 10);
    console.log(remainder, num);
    reverse = reverse * 10 + remainder;
  }

  return reverse;
}

var num = 12345;
console.log(reverseNumber(num));
