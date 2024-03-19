const areaOrPerimeter = (l,w) => {
  return (l === w) ? l * w : 2 * l + 2 * w;
}

console.log(areaOrPerimeter(6,10))