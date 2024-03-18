function countBy(x, n) {
  return [...Array(n)].map((el, i) => (i + 1) * x)
}

console.log(countBy(2,5))