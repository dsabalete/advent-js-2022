function checkPart(part) {
  if (part === [...part].reverse().join('')) {
    return true
  }

  for (let i = 0; i < [...part].length; i++) {
    const candidate = [...part]
    candidate.splice(i, 1)
    if (candidate.join('') === candidate.reverse().join('')) {
      return true
    }
  }
  return false
}

module.exports = checkPart
