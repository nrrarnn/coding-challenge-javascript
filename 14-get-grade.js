function getGrade(...scores){

  let hasil = '';
  const rata2 = scores.reduce((acc,curr) => acc + curr) / scores.length

  console.log(rata2)

   if(rata2 < 60){
    hasil = 'F'
   } else if(rata2 < 70) {
    hasil = 'D'
   } else if(rata2 < 80){
    hasil = 'C'
   } else if(rata2 < 90){
    hasil = 'B'
   } else {
    hasil = 'A'
   }

  return hasil;
}

console.log(getGrade(90,90,90))