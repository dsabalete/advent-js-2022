function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)

  return gifts.map((gift) => {
    let cityWeight = gift.weight
    let reindeers = reindeerTypes.filter(
      (reindeer) => reindeer.weightCapacity < gift.weight
    )
    let team = {}
    while (cityWeight != 0) {
      reindeers.map((reindeerType) => {
        if (cityWeight - reindeerType.weightCapacity >= 0) {
          team[reindeerType.type]
            ? (team[reindeerType.type] += 1)
            : (team[reindeerType.type] = 1)
          cityWeight -= reindeerType.weightCapacity
        }
      })
    }
    return {
      country: gift.country,
      reindeers: reindeers
        .map((y) => {
          return {
            type: y.type,
            num: team[y.type]
          }
        })
        .reverse()
    }
  })
}

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

module.exports = howManyReindeers
