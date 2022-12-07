const distributeGifts = require('./day03')

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
// distributeGifts(packOfGifts, reindeers) // 2

describe('distributeGifts', () => {
  it('should return 1', () => {
    expect(
      distributeGifts(
        ['book', 'toy', 'ball', 'skate'], // 4 + 3 + 4 + 5 = 16
        ['dasher', 'dancer'] // 12 + 12 = 24
      )
    ).toBe(1) // 24 / 16 = 1.5
  })
  it('should return 2', () => {
    expect(
      distributeGifts(
        ['book', 'doll', 'ball'], // 4 + 4 + 4 = 12
        ['dasher', 'dancer'] // 12 + 12 = 24
      )
    ).toBe(2) // 24 / 12 = 2
  })
  it('should return 3', () => {
    expect(
      distributeGifts(
        ['book', 'doll', 'ball'], // 12
        ['dasher', 'dancer', 'prancer'] // 12 + 12 + 14 = 38
      )
    ).toBe(3) // 38 / 12 = 3.1666666666666665
  })
})
