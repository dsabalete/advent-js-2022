// Midudev solution adapted. I need to pass 'path' as a parameter to the helper function
// in order to make it work. I don't know why.
//
// function getOptimalPath(path) {
//   const helper = (path, i, j) => {
//     if (i === path.length) return 0

//     const min = Math.min(
//       helper(path, i + 1, j), // left
//       helper(path, i + 1, j + 1) // right
//     )

//     return min + path[i][j]
//   }

//   const result = helper(path, 0, 0)
//   return result
// }

// This solution scored 300 points. It's a bit more complex than the one above.
function getOptimalPath(path) {
  let result = path.reduce((acc, value) => {
    let sliceStart = 0
    return acc
      .map((n) => {
        let tmp0 = value.slice(sliceStart, sliceStart + 2).map((l) => l + n)
        sliceStart += 1
        return tmp0
      })
      .flat()
  })
  return Math.min(...result)
}

module.exports = getOptimalPath
