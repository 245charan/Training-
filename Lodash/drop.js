import slice from './slice.js'


function drop(array, n=1) {
  const length = array == null ? 0 : array.length ;
  return length ? slice(array, n < 0 ? 0 : n, length): [];
}


console.log(drop([1, 2, 3]));
// => [2, 3]

console.log(drop([1, 2, 3], 2));
// => [3]

console.log(drop([1, 2, 3], 5));
// => []

console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]

console.log(_.drop([1, 2, 3], 0));