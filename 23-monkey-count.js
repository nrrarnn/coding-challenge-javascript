const monkeyCount = (n) => {
  return Array.from({length : n}, (_, i) => i+1)
  
}

console.log(monkeyCount(5))