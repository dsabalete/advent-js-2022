function decorateTree(base) {
  const rules = {
    PP: 'P',
    BB: 'B',
    RR: 'R',
    PB: 'R',
    BP: 'R',
    PR: 'B',
    RP: 'B',
    BR: 'P',
    RB: 'P'
  }
  const decorate = [base]
  base = base.split(' ')
  let height = base.length - 1
  for (let i = 0; i < height; i++) {
    const newBase = []
    for (let j = 0; j < base.length - 1; j++) {
      newBase.push(rules[base[j] + base[j + 1]])
    }
    base = newBase
    decorate.unshift(newBase.join(' '))
  }
  return decorate
}

// Place on top :    P     R     B     P
// If below is  :   P P   B P   R P   B R

module.exports = decorateTree
