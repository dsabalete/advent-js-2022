const checkJump = require('./day10')

// const heights = [1, 3, 8, 5, 2]
// checkJump(heights) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

// const heights = [1, 7, 3, 5]
// checkJump(heights) // false

/*
It's `false`.
It goes up-down-up.

  7   5
 ↗ ↘ ↗
1    3
*/

describe('checkJump', () => {
  it('checks if the jump is up-down', () => {
    const heights = [1, 2, 1]
    expect(checkJump(heights)).toBe(true)
  })
  it('checks if the jump is up-down', () => {
    const heights = [1, 3, 8, 5, 2]
    expect(checkJump(heights)).toBe(true)
  })
  it('checks if the jump is up-down-up', () => {
    const heights = [1, 7, 3, 5]
    expect(checkJump(heights)).toBe(false)
  })
  it('checks if the jump is up-down-up', () => {
    const heights = [1, 2, 3, 2, 1]
    expect(checkJump(heights)).toBe(true)
  })
  it('checks if the jump is up-same-same-same-down', () => {
    const heights = [1, 2, 2, 2, 1]
    expect(checkJump(heights)).toBe(true)
  })
  it('checks if it stays equal', () => {
    const heights = [2, 2, 2, 2]
    expect(checkJump(heights)).toBe(false)
  })
  it('checks if the jump is up-up-up', () => {
    const heights = [1, 2, 3]
    expect(checkJump(heights)).toBe(false)
  })
  it('checks if the jump up-up-down-down-up-up', () => {
    const heights = [1, 2, 3, 2, 1, 2, 3]
    expect(checkJump(heights)).toBe(false)
  })
  it('checks if the jump same-same-same-same-up-down', () => {
    const heights = [1, 1, 1, 1, 2, 1]
    expect(checkJump(heights)).toBe(true)
  })
  it('checks if the jump up-up-down-up-down', () => {
    const heights = [1, 2, 3, 1, 3, 1]
    expect(checkJump(heights)).toBe(false)
  })
})
