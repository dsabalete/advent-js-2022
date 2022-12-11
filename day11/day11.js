function getCompleted(part, total) {
  const getSeconds = (time) => time[0] * 3600 + time[1] * 60 + time[2]
  const getHCF = (a, b) => (b == 0 ? a : getHCF(b, a % b))
  const partTime = part.split(':').map(Number)
  const totalTime = total.split(':').map(Number)
  const partSeconds = getSeconds(partTime)
  const totalSeconds = getSeconds(totalTime)
  const hcf = getHCF(partSeconds, totalSeconds)
  return `${partSeconds / hcf}/${totalSeconds / hcf}`
}

module.exports = getCompleted
