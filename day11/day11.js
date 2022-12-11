function getCompleted(part, total) {
  const partTime = part.split(':').map(Number)
  const totalTime = total.split(':').map(Number)
  const partSeconds = partTime[0] * 3600 + partTime[1] * 60 + partTime[2]
  const totalSeconds = totalTime[0] * 3600 + totalTime[1] * 60 + totalTime[2]
  let hcf
  for (let i = 1; i <= partSeconds && i <= totalSeconds; i++) {
    if (partSeconds % i == 0 && totalSeconds % i == 0) {
      hcf = i
    }
  }
  return `${partSeconds / hcf}/${totalSeconds / hcf}`
}

module.exports = getCompleted
