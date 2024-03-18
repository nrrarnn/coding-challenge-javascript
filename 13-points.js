const points = (games) => {
  return games.reduce((total,perbandingan) => {
    const [x,y] = perbandingan.split(':').map(Number)
    return total + (x > y ? 3 : x === y ? 1 : 0)
  },0);
}


console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))