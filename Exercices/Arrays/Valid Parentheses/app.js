let s = "()[]{}"

var isValid = function(s) {
  const obj = {"(": ")", "[": "]", "{":"}"}
  const stack = []

  for(let ch of s){
    if(obj[ch]){
      stack.push(obj[ch])
    } else if(stack.length > 0 && stack[stack.length-1] === ch){
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
    
};

console.log(isValid(s))
