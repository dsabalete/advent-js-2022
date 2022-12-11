const getCompleted = require('./day11')

// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5

describe('getCompleted', () => {
  it('returns the correct string', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3')
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2')
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
    expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6')
    expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3')
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5')
  })
})
