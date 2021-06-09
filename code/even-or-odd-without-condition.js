function evenOrOdd(num) {
  var list = ["even", "odd"];
  return list[num % 2];
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(45));
console.log(evenOrOdd(66));
