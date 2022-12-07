const fitsInOneBox = require('./day04')

describe('fitsInOneBox', () => {
  it('should return true', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
      ])
    ).toBe(true)
  })
  it('should return false', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
      ])
    ).toBe(false)
  })
  it('should return true', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
      ])
    ).toBe(true)
  })
})
