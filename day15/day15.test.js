const decorateTree = require('./day15')

// Place on top :    P     R     B     P
// If below is  :   P P   B P   R P   B R

//decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

//decorateTree('B B') // ['B', 'B B']

describe('decorateTree', () => {
  it('returns an array', () => {
    expect(decorateTree('B P R P')).toBeInstanceOf(Array)
  })

  it('returns ["R", "P B", "R B B", "B P R P"] for a base "B P R P"', () => {
    expect(decorateTree('B P R P')).toEqual(['R', 'P B', 'R B B', 'B P R P'])
  })

  it('returns ["B", "B B"] for a base "B B"', () => {
    expect(decorateTree('B B')).toEqual(['B', 'B B'])
  })
})
