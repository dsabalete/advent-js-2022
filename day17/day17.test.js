const carryGifts = require('./day17')

// carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// in each bag you can carry 10kg
// the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
// the second bag carries 'book' and ' toy' which weigh 4kg and 3kg

// carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// in each bag you can carry 7kg
// the first bag can only carry 'game' which weighs 4kg
// the second bag can only carry 'bike' which weighs 4kg

// carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// in each bag you can carry 4kg
// each bag can only carry one gift

// carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// in each bag you can carry 6kg
// each bag can only carry one gift
// note that you can not carry 'toy toy' in a bag
// because it is not next to each other

describe('carryGifts', () => {
  it('should return an empty bag', () => {
    expect(carryGifts(['game'], 2)).toEqual([])
  })

  it('should return the two bags with several gifts in each one', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual([
      'game bike',
      'book toy'
    ])
  })

  it('should return bags with gifts on each bag', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual([
      'game',
      'bike',
      'book toy'
    ])
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toEqual([
      'game',
      'bike',
      'book',
      'toy'
    ])
    expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual([
      'toy',
      'gamme',
      'toy',
      'bike'
    ])
  })
})
