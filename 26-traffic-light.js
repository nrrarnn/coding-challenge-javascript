const updateLight = (current) => {
  return (current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green')
}

console.log(updateLight('red'))