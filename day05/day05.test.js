const getMaxGifts = require('./day05')

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

describe('getMaxGifts', () => {
  it('should return 20', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
  })
  it('should return 0', () => {
    expect(getMaxGifts([50], 15, 1)).toBe(0)
  })
  it('should return 50', () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50)
  })
  it('should return 70', () => {
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
  })
  it('should return 100', () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
  })
  it('should return 100', () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100)
  })
  it('should return 100', () => {
    expect(getMaxGifts([50, 70, 30], 100, 4)).toBe(100)
  })
})
