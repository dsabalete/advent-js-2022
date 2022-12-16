function fixLetter(letter) {
  return letter
    .trim()
    .replace(/,/g, ', ')
    .replace(/\s+\./g, '.')
    .replace(/\s+/g, ' ')
    .replace(/[??]+/g, '?')
    .replace(/(\s+)([,.?!])+/g, (m, s1, s2) => s2)
    .replace(/^([A-z])/, (m, p) => p.toUpperCase())
    .replace(/([?.!])\s+(\w)/g, (m, s1, s2) => `${s1} ${s2.toUpperCase()}`)
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/([A-z])$/, (m, s) => `${s}.`)
}

// Another solution from the adventjs discord:
// function fixLetter(letter) {
//   return letter
//     .replace(/(\s+)/g, ' ')
//     .replace(/([?!.,])\1*/g, '$1')
//     .replace(/([?!,])\s*\.$/, '$1')
//     .replace(/\s*([?!.,])\s*/g, '$1 ')
//     .replace(/santa claus/gi, 'Santa Claus')
//     .replace(/([?.!]\s[a-z])/g, (a) => a.toUpperCase())
//     .replace(/(^\s)|(\s$)/g, '')
//     .replace(/([A-z])$/g, '$1.')
//     .replace(/^([a-z])/g, (a) => a.toUpperCase())
// }

module.exports = fixLetter
