// My solution
// function countTime(leds) {
//   if (leds.every((led) => led === 1)) {
//     return 0
//   } else {
//     let seconds = 0
//     const numLeds = leds.length
//     const ledsOn = [...leds]
//     let ledsPrev = [...leds]
//     for (let i = 0; i < numLeds; i++) {
//       for (let j = numLeds - 1; j >= 0; j--) {
//         if (j === 0) {
//           if (ledsPrev[numLeds - 1] === 1) {
//             ledsOn[j] = 1
//           }
//         } else {
//           if (ledsPrev[j - 1] == 1) {
//             ledsOn[j] = 1
//           }
//         }
//       }
//       seconds += 7
//       if (ledsOn.every((led) => led === 1)) {
//         break
//       }
//       ledsPrev = [...ledsOn]
//     }
//     return seconds
//   }
// }

// Another solution that blows my mind
function countTime(leds) {
  const arr = leds.join('').split('1')
  arr[0] += arr.splice(-1)
  return Math.max(...arr.map((el) => el.length)) * 7
}

module.exports = countTime
