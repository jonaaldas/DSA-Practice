const factorial = (n) => {
  // factorial 
  // 5*4*3*2*1
  let result = 1
  for(let i = 2; i <= n; i++){
    result = result * i
  }
  console.log(result)
}

factorial(5)

// time complexity O(n)