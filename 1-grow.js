// function grow(x){
//   let result = x[0];
//   for (let i = 0; i < x.length ; i++ ) {
//     result *= x[i]
//   }
//   return result;
// }

function grow(x){
  let result = x.reduce((acc, curr) => acc*curr, 1)
  return result;
}
console.log(grow([1,2,3]))