function countHours(year, holidays) {
  return holidays
    .map((day) => new Date(`${year}/${day}`).getDay())
    .filter((day) => day > 0 && day < 6)
    .map((day) => 2)
    .reduce((acc, cur) => acc + cur, 0)
}

module.exports = countHours
