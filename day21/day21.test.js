const printTable = require('./day21')

describe('printTable', () => {
  it('prints the table with short columns', () => {
    expect(
      printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 }
      ])
    ).toEqual(
      `+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************`
    )
  })

  it('prints the table with long columns', () => {
    expect(
      printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
      ])
    ).toEqual(
      `++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************`
    )
  })
})
