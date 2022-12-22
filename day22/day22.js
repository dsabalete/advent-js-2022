// My solution
function checkStepNumbers(systemNames, stepNumbers) {
  const systems = {}
  systemNames.forEach((systemName, index) => {
    if (systems[systemName]) {
      systems[systemName].push(stepNumbers[index])
    } else {
      systems[systemName] = [stepNumbers[index]]
    }
  })
  for (const [key, value] of Object.entries(systems)) {
    for (let i = 0; i < value.length - 1; i++) {
      if (value[i] >= value[i + 1]) {
        return false
      }
    }
  }
  return true
}

// Forum solution (340pts) with every
// function checkStepNumbers(systemNames, stepNumbers) {
//   return systemNames.every(
//     (_, i) =>
//       stepNumbers[i] <=
//       stepNumbers[i + systemNames.slice(i + 1).indexOf(systemNames[i]) + 1]
//   )
// }

// Forum solution (350pts) with reduce
// function checkStepNumbers(systemNames, stepNumbers) {
//   return (
//     systemNames.reduce((curr, x, i) => {
//       let check =
//         stepNumbers[i] <=
//         stepNumbers[i + 1 + systemNames.slice(i + 1).indexOf(systemNames[i])]
//       return curr + check
//     }, 0) == systemNames.length
//   )
// }

module.exports = checkStepNumbers
