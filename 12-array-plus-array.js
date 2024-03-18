const arrayPlusArray = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((total, curr) => total + curr)
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))