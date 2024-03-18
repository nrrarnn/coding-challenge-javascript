const countSheep = function (num){
 return [...Array(num)].map((el, i) => (i + 1) + " sheep..." ).join('')
}

console.log(countSheep(7))