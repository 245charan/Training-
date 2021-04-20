const memo = {}

const multiplyBy2 = n => {
  if (memo[n]) {
    return memo[n]
  }
  const total = n * 2
  console.log('Loading...') 
  memo[n] = total
  return total
}

console.log(multiplyBy2(5))
console.log(multiplyBy2(2))
console.log(multiplyBy2(5))
console.log(multiplyBy2(2))