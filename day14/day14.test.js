const getOptimalPath = require('./day14')

// getOptimalPath([[0], [2, 3]]) // 2

// getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5

// getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8

describe('getOptimalPath', () => {
  it('returns the optimal path', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
  })
})
