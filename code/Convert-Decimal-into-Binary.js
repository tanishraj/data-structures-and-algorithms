function decimalToBinary(decimal) {
  var remainder = [];

  while (decimal !== 0) {
    remainder.unshift(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return remainder.join("");
}

var decimal = 8;
console.log(decimalToBinary(decimal));
