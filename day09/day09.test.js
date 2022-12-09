const countTime = require('./day09')

/*
const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
*/

describe('countTime', () => {
  it('counts 0 seconds if all the lights are already on', () => {
    expect(countTime([1, 1, 1, 1, 1])).toBe(0)
  })
  it('counts 7 seconds if the lights are 0 1 1 0 1', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
  })
  it('counts 21 seconds if the lights are 0 0 0 1', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
  })
  it('counts 28 seconds if the lights are 0 0 1 0 0', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
  })
})
