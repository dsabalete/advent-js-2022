function printTable(gifts) {
  const giftColumnWidths = gifts.map((gift) => gift.name.length)
  const quantityColumnWidths = gifts.map(
    (gift) => gift.quantity.toString().length
  )
  const maxGiftCol = Math.max(...giftColumnWidths, 'Gift'.length)
  const maxQuantityCol = Math.max(...quantityColumnWidths, 'Quantity'.length)

  const [header, footer] = ['+', '*'].map((char) =>
    char.repeat(maxGiftCol + maxQuantityCol + 7)
  )
  const title = `| Gift${' '.repeat(maxGiftCol - 3)}| Quantity${' '.repeat(
    maxQuantityCol - 7
  )}|`

  const separator = `| ${'-'.repeat(maxGiftCol)} | ${'-'.repeat(
    maxQuantityCol
  )} |`

  const content = gifts.map(
    (gift) =>
      `| ${gift.name}${' '.repeat(maxGiftCol - gift.name.length)} | ${
        gift.quantity
      }${' '.repeat(maxQuantityCol - gift.quantity.toString().length)} |`
  )

  return [header, title, separator, ...content, footer].join('\n')
}

module.exports = printTable
