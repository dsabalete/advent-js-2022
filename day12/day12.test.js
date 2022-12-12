const selectSleigh = require('./day12')

// selectSleigh(distance, sleighs) // => "Madeval"

// Gorusuke consumes 9W to cover 30 distance
// Madeval consumes 15W to cover 30 distance
// Lolivier consumes 21W to cover 30 distance
// Hyuuh consumes 30W to cover 30 distance

// The best sleigh to cover the distance is Madeval.

// Gorusuke covers the distance but it's a worse sleigh
// Lolivier and Hyuuh can't cover the distance with 20W.

const distance = 30
const sleighs = [
  { name: 'Gorusuke', consumption: 0.3 },
  { name: 'Madeval', consumption: 0.5 },
  { name: 'Lolivier', consumption: 0.7 },
  { name: 'Hyuuh', consumption: 1 }
]

describe('selectSleigh', () => {
  it('returns the correct type', () => {
    expect(typeof selectSleigh(distance, sleighs)).toEqual('string')
  })

  it('selects the best sleigh', () => {
    expect(selectSleigh(distance, sleighs)).toEqual('Madeval')
  })
})
