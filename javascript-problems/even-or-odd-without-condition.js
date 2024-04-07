function evenOrOdd(num) {
  var list = ["even", "odd"];
  return list[num % 2];
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(45));
console.log(evenOrOdd(66));

// Another Approach
function evenOrOdd2(num) {
  return (num & 1 && "odd") || "even";
}

console.log(evenOrOdd2(1));
console.log(evenOrOdd2(45));
console.log(evenOrOdd2(66));
