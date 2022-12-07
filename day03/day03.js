function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.reduce((acc, cur) => {
      return acc + cur.length * 2
    }, 0) /
      packOfGifts.reduce((acc, cur) => {
        return acc + cur.length
      }, 0)
  )
}

module.exports = distributeGifts
