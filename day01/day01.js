function wrapping(gifts) {
  return gifts.map((gift) => {
    let w = '*'.repeat(gift.length + 2)
    return `${w}\n*${gift}*\n${w}`
  })
}

module.exports = wrapping
