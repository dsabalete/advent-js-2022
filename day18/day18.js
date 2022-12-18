function dryNumber(dry, numbers) {
  numbers = Array.from({ length: numbers }, (_, i) => i + 1)
  return numbers.reduce((acc, curr) => {
    if (curr.toString().includes(dry.toString())) {
      acc.push(curr)
    }
    return acc
  }, [])
}

module.exports = dryNumber
