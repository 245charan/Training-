function isNull(value) {
  return value === null
}
console.log(isNull(null)); // => true
console.log(isNull(6)); // => false


console.log(_.isNull(null));
console.log(_.isNull(0));