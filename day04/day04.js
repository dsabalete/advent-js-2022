function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) => {
      if (i === 0) return true
      const prevBox = boxes[i - 1]
      return box.l > prevBox.l && box.w > prevBox.w && box.h > prevBox.h
    })
}

module.exports = fitsInOneBox
