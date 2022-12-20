const howManyReindeers = require('./day20')

// howManyReindeers(reindeerTypes, gifts)
// [
//   ({
//     country: 'Spain',
//     reindeers: [
//       { type: 'Electric', num: 1 },
//       { type: 'Gasoline', num: 3 },
//       { type: 'Diesel', num: 5 }
//     ]
//   },
//   {
//     country: 'France',
//     reindeers: [
//       { type: 'Electric', num: 1 },
//       { type: 'Gasoline', num: 1 },
//       { type: 'Diesel', num: 2 }
//     ]
//   },
//   {
//     country: 'Italy',
//     reindeers: [
//       { type: 'Electric', num: 3 },
//       { type: 'Gasoline', num: 3 },
//       { type: 'Diesel', num: 5 }
//     ]
//   })
// ]

describe('howManyReindeers', () => {
  it('returns an array of objects', () => {
    const reindeerTypes = [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ]

    const gifts = [
      { country: 'Spain', weight: 30 }
      // { country: 'France', weight: 17 },
      // { country: 'Italy', weight: 50 }
    ]
    expect(howManyReindeers(reindeerTypes, gifts)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          country: expect.any(String),
          reindeers: expect.arrayContaining([
            expect.objectContaining({
              type: expect.any(String),
              num: expect.any(Number)
            })
          ])
        })
      ])
    )
  })
})
