const sumMix = (x) => {
  return x.reduce((acc,curr) => +acc + +curr)
}

console.log(sumMix([9, 3, '7', '3']))