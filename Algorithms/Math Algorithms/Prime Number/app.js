const primerNumber = (n) => {
  if(n < 2){
    return false
  }
  for (let i = 2; i < n; i++) {
    if(n % i === 0){
      return false
    }
  }
  return true
}

console.log(primerNumber(5))
console.log(primerNumber(3))
console.log(primerNumber(4))