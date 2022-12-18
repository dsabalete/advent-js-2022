const dryNumber = require('./day18')

// dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// we don't have ink for the number 1
// we have to print 15 barcodes from 1 to 15
// the barcodes that will be wrong because of the lack of ink are:
// 1, 10, 11, 12, 13, 14, 15

// dryNumber(2, 20) // [2, 12, 20]

// we don't have ink for the number 2
// we have to print 20 barcodes from 1 to 20
// the barcodes that will be wrong because of the lack of ink are:
// 2, 12, 20

describe('dryNumber', () => {
  it('returns an array of numbers that are not possible to print', () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15])
    expect(dryNumber(2, 20)).toEqual([2, 12, 20])
  })
})
