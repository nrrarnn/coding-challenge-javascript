const doubleChar = (str) => {
  return str.split('').map((el) => el + el).join('')
}

console.log(doubleChar('hai'))