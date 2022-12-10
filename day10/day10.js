function checkJump(heights) {
  const peak = Math.max(...heights)
  const peakIndex = heights.indexOf(peak)
  const left = heights.slice(0, peakIndex)
  const right = heights.slice(peakIndex + 1)
  if (left.length === 0 || right.length === 0) return false
  const isGoingUp = left.slice(1).every((l, i) => l >= left[i])
  const isGoingDown = right.slice(1).every((r, i) => r <= right[i])
  return isGoingUp && isGoingDown && left.length !== 0 && right.length !== 0
}

module.exports = checkJump
