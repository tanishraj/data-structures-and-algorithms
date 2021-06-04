var arr = [4, 5, 2, 0, 6];

function maxWater(height, n = arr.length) {
  let maximum = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let current = Math.min(height[i], height[j]) * (j - i - 1);

      maximum = Math.max(maximum, current);
    }
  }
  return maximum;
}

console.log(maxWater(arr));
