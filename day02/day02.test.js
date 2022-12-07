const countHours = require('./day02')

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

// countHours(year, holidays) // 2 days -> 4 extra hours in the year

describe('countHours', () => {
  it('should return 4', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4)
  })
  it('should return 2', () => {
    expect(countHours(2023, ['01/06', '04/01'])).toBe(2)
  })
  it('should return 0', () => {
    expect(countHours(2022, ['01/01', '12/25'])).toBe(0)
  })
})
