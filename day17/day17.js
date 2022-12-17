// First solution
function carryGifts(gifts, maxWeight) {
  if (gifts.some((gift) => gift.length > maxWeight)) {
    return []
  }
  const bags = []
  let tempBag = []
  let tempWeight = 0
  gifts.forEach((gift) => {
    const weight = gift.length
    // if the gift fits in the bag
    if (tempWeight + weight <= maxWeight) {
      tempBag.push(gift)
      tempWeight += weight
    } else {
      // if the gift does not fit in the bag
      bags.push(tempBag.join(' '))
      tempBag = [gift]
      tempWeight = weight
    }
  })
  if (tempBag.length > 0) {
    bags.push(tempBag.join(' '))
  }
  return bags
}

module.exports = carryGifts
