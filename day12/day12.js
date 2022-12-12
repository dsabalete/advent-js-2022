function selectSleigh(distance, sleighs) {
  const selection = sleighs.filter((s) => s.consumption * distance <= 20)
  return selection.length > 0 ? selection[selection.length - 1].name : null
}

module.exports = selectSleigh
