const wrapping = require('./day01')

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */

describe('wrapping', () => {
  it("should return ['*****\\n*cat*\\n*****', '******\\n*game*\\n******', '*******\\n*socks*\\n*******']", () => {
    expect(wrapping(['cat', 'game', 'socks'])).toEqual([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ])
  })
})
