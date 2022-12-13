function getFilesToBackup(lastBackup, changes) {
  const result = new Set()
  changes
    .filter((change) => change[1] > lastBackup)
    .map((change) => change[0])
    .sort((a, b) => a - b)
    .forEach((file) => result.add(file))
  return [...result]
}

module.exports = getFilesToBackup
