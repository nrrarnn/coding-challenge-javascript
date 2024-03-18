const rps = (p1,p2) => {
  const rules = {
    'rock' : 'scissors',
    'scissors' : 'paper',
    'paper' : 'rock'
  }

  if(p1 === p2) {
    return 'Draw!'
  } else {
    return `Player ${(rules[p1] === p2) ? '1' : '2'} won!`
  }
  
}
console.log(rps('scissors', 'paper'))