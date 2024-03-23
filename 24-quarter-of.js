const quarter_of = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}

console.log(quarter_of(10))