import { forEach } from 'lodash'

/**
 * Add a + b where range of result is between 0 and clockSize
 */
const clockAddition = (a, b, clockSize) => {
  if (a + b < 0) {
    return a + clockSize + b
  }
  if (a + b > clockSize - 1) {
    return (a + b) % clockSize
  }
  return a + b
}

/**
 * Get Set of neighbors for cellName
 */
const getNeighbors = (cellName, grid, gridSize, wrap = true) => {
  let liveNeighborCount = 0
  let [row, column] = JSON.parse(cellName)
  let rowPointer, colPointer, neighborName
  const neighbors = new Set()
  for (let i = -1; i <= 1; i++) {
    if (wrap) {
      colPointer = clockAddition(column, i, gridSize)
    } else {
      colPointer = column + i
    }
    for (let j = -1; j <= 1; j++) {
      if (wrap) {
        rowPointer = clockAddition(row, j, gridSize)
      } else {
        rowPointer = row + j
      }
      // neighborName = `${rowPointer}-${colPointer}`
      neighborName = JSON.stringify([rowPointer, colPointer])
      if (neighborName !== cellName) {
        // if (grid.has(neighborName)) {
        //   liveNeighborCount++
        // }
        neighbors.add(neighborName)
      }
    }
  }
  return neighbors
}

const countLiveNeighbors = (cellName, grid, gridSize, wrap = true) => {
  const cellNeighbors = getNeighbors(cellName, grid, gridSize, wrap)
  let count = 0
  cellNeighbors.forEach((neighborName) => {
    if (grid.has(neighborName)) {
      count++
    }
  })
  return count
}

const getLiveNeighborCount = (cellName, grid) => {}

const determineNextCellState = (liveNeighbors, currentCellState) => {
  if (liveNeighbors === 3) {
    return true
  }
  if (liveNeighbors === 2 && currentCellState) {
    return true
  }
  return false
}

const calculateCellState = (cellName, grid, gridSize) => {
  const liveNeighbors = countLiveNeighbors(cellName, grid, gridSize)
  const newState = determineNextCellState(liveNeighbors, grid.has(cellName))
  return newState
}

export const flipCell = (cellName, grid) => {
  const clonedGrid = new Set(grid)
  if (grid.has(cellName)) {
    clonedGrid.delete(cellName)
  } else {
    clonedGrid.add(cellName)
  }
  return clonedGrid
}

export const getNextIteration = (grid, gridSize, wrap = true) => {
  const newGrid = new Set()
  // First pass: Collect all live cells and their neighbors for evaluation
  const cellsToEvaluate = new Set()
  grid.forEach((cellName) => {
    cellsToEvaluate.add(cellName)
    const cellNeighbors = getNeighbors(cellName, grid, gridSize, wrap)
    cellNeighbors.forEach((neighborName) => {
      cellsToEvaluate.add(neighborName)
    })
  })
  // Second pass: Evaluate cells
  cellsToEvaluate.forEach((cellName) => {
    const currentState = grid.has(cellName)
    const liveNeighborCount = countLiveNeighbors(cellName, grid, gridSize, wrap)
    const newCellState = determineNextCellState(liveNeighborCount, currentState)
    if (newCellState) {
      newGrid.add(cellName)
    }
  })
  return newGrid
}

export const makeHashGrid = (lifeSeed, gridSize) => {
  const grid = new Set()
  ;[...Array(gridSize).keys()].forEach((i) => {
    return [...Array(gridSize).keys()].forEach((j) => {
      if (Math.random() > 1 - lifeSeed) {
        // const cellName = `${i}-${j}`
        const cellName = JSON.stringify([i, j])
        grid.add(cellName)
      }
    })
  })
  return grid
}
