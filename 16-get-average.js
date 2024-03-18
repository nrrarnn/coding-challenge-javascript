const getAverage = (marks) => {
  return Math.floor(marks.reduce((acc,curr) => acc + curr) / marks.length);
  // let total = 0;
  // for(let i = 0; i < marks.length ; i++){
  //   total += marks[i] / marks.length
  // }

  // return Math.floor(total)

}

console.log(getAverage([1,2,3,4,5,9,7]))