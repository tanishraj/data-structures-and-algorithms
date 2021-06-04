function removeDuplicates(arr) {
  return arr.reduce((result, currValue) => {
    if (result.indexOf(currValue) === -1) {
      result.push(currValue);
    }

    return result;
  }, []);
}

console.log(
  "Unique Array:",
  removeDuplicates([11, 2, 33, 3, 10, 10, 2, 5, 4, 2, 6, 4, 23, 2, 6, 3])
);
