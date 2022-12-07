function getGiftsToRefill(a1, a2, a3) {
  const allGifts = [...new Set([...a1, ...a2, ...a3])]
  return allGifts.filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) < 2
  )
}

module.exports = getGiftsToRefill
