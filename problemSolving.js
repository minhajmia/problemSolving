function rotateLeft(array, positionOfNumber) {
  for (let i = 0; i < positionOfNumber; i++) {
    array.push(array.shift());
  }
  return array;
}
const result = rotateLeft([1, 2, 3, 4, 5], 4);
console.log(result);
