function createCube(size) {
  let figure = ''
  for (let i = 1; i <= size; i++) {
    figure +=
      ' '.repeat(size - i) + `\/\\`.repeat(i) + `_\\`.repeat(size) + '\n'
  }
  for (let i = size; i > 0; i--) {
    figure +=
      ' '.repeat(size - i) + `\\\/`.repeat(i) + `_\/`.repeat(size) + '\n'
  }
  return figure.slice(0, -1)
}

module.exports = createCube
