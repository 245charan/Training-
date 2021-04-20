const specialNum = () => {
  let cache = {}
  return name => {
    if (cache[name]) {
      return cache[name]
    }
    console.log('Generating special number...') // To represent this process taking time
    const rand = Math.floor(Math.random() * 3 + 1)
    cache[name] = rand
    return rand
  }
}

const generateSecretNum = specialNum()

const specialNumBrian = generateSecretNum('brian')
const specialNumPiper = generateSecretNum('piper')

console.log(specialNumBrian) 
console.log(specialNumPiper) 
console.log(specialNumBrian) 
console.log(specialNumPiper) 