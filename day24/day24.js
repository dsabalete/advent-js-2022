function canExit(maze) {
  // Get the starting position
  let start
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 'S') {
        start = [i, j]
        break
      }
    }
  }

  // Initialize the queue with the starting position
  const queue = [start]
  // Initialize a set to store the visited positions
  const visited = new Set()

  // Define the directions for the movements
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  // Iterate through the queue
  while (queue.length > 0) {
    // Get the first position from the queue
    const [x, y] = queue.shift()
    // If the position is the exit, return true
    if (maze[x][y] === 'E') {
      return true
    }
    // Mark the position as visited
    visited.add(`${x},${y}`)
    // Iterate through the directions
    for (const [dx, dy] of directions) {
      // Calculate the next position
      const i = x + dx
      const j = y + dy
      // Check if the next position is valid
      if (
        i >= 0 &&
        i < maze.length &&
        j >= 0 &&
        j < maze[i].length &&
        maze[i][j] !== 'W' &&
        !visited.has(`${i},${j}`)
      ) {
        // Add the next position to the queue
        queue.push([i, j])
      }
    }
  }

  // Return false if there is no exit
  return false
}

module.exports = canExit
