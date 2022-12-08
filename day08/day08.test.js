const checkPart = require('./day08')

//checkPart('uwu') // true
// "uwu" is a palindrome without removing any character

//checkPart('miidim') // true
// "miidim" can be a palindrome after removing the first "i"

//checkPart('midu') // false
// "midu" cannot be a palindrome after removing a character

describe('checkPart', () => {
  it('returns true if the string is a palindrome without removing any character', () => {
    expect(checkPart('uwu')).toBe(true)
  })

  it('returns true if the string can be a palindrome after removing a character', () => {
    expect(checkPart('miidim')).toBe(true)
  })

  it('returns false if the string cannot be a palindrome after removing a character', () => {
    expect(checkPart('midu')).toBe(false)
  })
})
