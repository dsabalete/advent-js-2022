const checkStepNumbers = require('./day22.js')

// const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
// const stepNumbers = [1, 33, 10, 2, 44, 20]

// checkStepNumbers(systemNames, stepNumbers) // => true

// tree_1 has steps: [1, 2]
// tree_2 has steps: [33, 44]
// house has steps: [10, 20]

// true: The steps of each system are in strictly increasing order

// checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10]) // => false

// tree_1 has steps: [2, 1]
// house has steps: [10]

// false: tree_1 has steps in decreasing order

describe('checkStepNumbers', () => {
  it('returns true if the steps of each system are in strictly increasing order', () => {
    const systemNames = [
      'tree_1',
      'tree_2',
      'house',
      'tree_1',
      'tree_2',
      'house'
    ]
    const stepNumbers = [1, 33, 10, 2, 44, 20]

    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
  })

  it('returns false if the steps of any system are not in strictly increasing order', () => {
    expect(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])).toBe(
      false
    )
  })
})
