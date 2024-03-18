const sumArray = (array) => {

  if(array == null || array.length <= 2) return 0;
 
  return array.sort((a,b) => a - b).slice(1,-1).reduce((acc,curr) => acc + curr)
}

console.log(sumArray([ 6, 2,8,9 ]))