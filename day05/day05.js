function getMaxGifts(giftsCities, maxGifts, maxCities) {
  // [12, 3, 11, 5, 7], 20, 3
  const allGifts = giftsCities.reduce((acc, cur) => acc + cur, 0)
  return giftsCities.reduce((acc, giftsCity, idx) => {
    if (giftsCity > maxGifts) return acc
    const giftsCitiesClone = [...giftsCities]
    giftsCitiesClone.splice(idx, 1)
    const res =
      getMaxGifts(giftsCitiesClone, maxGifts - giftsCity, maxCities - 1) +
      giftsCity
    if (allGifts === res) {
      giftsCities.splice(1)
    }
    return res > acc ? res : acc
  }, 0)
}

module.exports = getMaxGifts
