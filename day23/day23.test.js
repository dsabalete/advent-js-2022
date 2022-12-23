const executeCommands = require('./day23')

describe('executeCommands', () => {
  it('should return an array of 8 registers', () => {
    expect(executeCommands([])).toHaveLength(8)
  })

  it('should execute commands', () => {
    expect(
      executeCommands([
        'MOV 5,V00', // V00 is 5
        'MOV 10,V01', // V01 is 10
        'DEC V00', // V00 is now 4
        'ADD V00,V01' // V00 = V00 + V01 = 14
      ])
    ).toEqual([14, 10, 0, 0, 0, 0, 0, 0])
  })

  it('should handle overflow', () => {
    expect(
      executeCommands([
        'MOV 255,V00', // V00 is 255
        'INC V00', // V00 is 256, overflows to 0
        'DEC V01', // V01 is -1, overflows to 255
        'DEC V01' // V01 is 254
      ])
    ).toEqual([0, 254, 0, 0, 0, 0, 0, 0])
  })

  it('should handle loops', () => {
    expect(
      executeCommands([
        'MOV 10,V00', // V00 is 10
        'DEC V00', // decrement V00 by 1<---┐
        'INC V01', // increment V01 by 1    |
        'JMP 1', // loop until V00 is 0 ----┘
        'INC V06' // increment V06 by 1
      ])
    ).toEqual([0, 10, 0, 0, 0, 0, 1, 0])
  })

  it('should handle MOV', () => {
    expect(
      executeCommands([
        'MOV 10,V00',
        'MOV V00,V01',
        'MOV V01,V02',
        'MOV V02,V03',
        'MOV V03,V04'
      ])
    ).toEqual([10, 10, 10, 10, 10, 0, 0, 0])
  })
})
