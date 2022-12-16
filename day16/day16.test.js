const fixLetter = require('./day16')

describe('fixLetter', () => {
  it('Remove spaces at the beginning and end of the prase', () => {
    const letter = `   Hello, how are you?   `
    const expected = `Hello, how are you?`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Remove spaces between words', () => {
    const letter = `Hello,  how are you?`
    const expected = `Hello, how are you?`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Leave a space after each comma and point', () => {
    const letter = `Hello,how are you?`
    const expected = `Hello, how are you?`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Remove spaces before comma or point', () => {
    const letter = `I'm a girl from Barcelona , Spain .`
    const expected = `I'm a girl from Barcelona, Spain.`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Questions must only end with a question mark', () => {
    const letter = `Hello, how are you??`
    const expected = `Hello, how are you?`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('The first letter of each sentence must be capitalized', () => {
    const letter = `hello, how are you?`
    const expected = `Hello, how are you?`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Put the word "Santa Claus" in uppercase if it appears in the letter', () => {
    const letter = `Hi Santa claus.`
    const expected = `Hi Santa Claus.`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Put a point at the end of the sentence if it does not have punctuation', () => {
    const letter = `Hi Santa claus`
    const expected = `Hi Santa Claus.`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('Removes ending spaces', () => {
    const letter = `Hey santa Claus .  I want a bike.   I want a videogame! `
    const expected = `Hey Santa Claus. I want a bike. I want a videogame!`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('should fix the letter', () => {
    const letterA = `hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye `
    const expectedA = `Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.`
    expect(fixLetter(letterA)).toBe(expectedA)

    const letterB = ` Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike. Is it possible?`
    const expectedB = `Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?`
    expect(fixLetter(letterB)).toBe(expectedB)
  })
})
