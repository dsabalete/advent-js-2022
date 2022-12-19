function sortToys(toys, positions) {
  let temp = []
  toys.forEach((toy, index) => {
    const position = positions[index]
    temp.push([position, toy])
  })
  return temp.sort((a, b) => a[0] - b[0]).map((el) => el[1])
}

module.exports = sortToys
