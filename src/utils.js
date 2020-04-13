import { forEach } from 'lodash'

const clockAddition = (a, b, clockSize) => {
  if (a + b < 0) {
    return a + clockSize + b
  }
  if (a + b > clockSize - 1) {
    return (a + b) % clockSize
  }
  return a + b
}

const getNeighbors = (cellName, gridSize) => {
  let [row, column] = cellName.split('-').map((x) => Number(x))
  let rowPointer, colPointer, neighborName
  const neighbors = new Set()
  for (let i = -1; i <= 1; i++) {
    colPointer = clockAddition(column, i, gridSize)
    for (let j = -1; j <= 1; j++) {
      rowPointer = clockAddition(row, j, gridSize)
      if (colPointer !== column || rowPointer !== row) {
        neighborName = `${rowPointer}-${colPointer}`
        neighbors.add(neighborName)
      }
    }
  }
  return neighbors
}

const countLiveNeighbors = (cellName, grid, gridSize) => {
  const neighbors = getNeighbors(cellName, gridSize)
  let count = 0
  neighbors.forEach((neighborName) => {
    if (grid.has(neighborName)) {
      count++
    }
  })
  return count
}

const determineNextState = (liveNeighbors, currentState) => {
  if (liveNeighbors === 3) {
    return true
  }
  if (liveNeighbors === 2 && currentState) {
    return true
  }
  return false
}

const calculateCellState = (cellName, grid, gridSize) => {
  const liveNeighbors = countLiveNeighbors(cellName, grid, gridSize)
  const newState = determineNextState(liveNeighbors, grid.has(cellName))
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

export const getNextIteration = (grid, gridSize) => {
  const newGrid = new Set()
  const counter = {}
  // First pass: propagate all live cells to a counter on their neighbors
  grid.forEach((cellName) => {
    const newNeighbors = getNeighbors(cellName, gridSize)
    newNeighbors.forEach((neighborName) => {
      if (counter.hasOwnProperty(neighborName)) {
        counter[neighborName] = counter[neighborName] + 1
      } else {
        counter[neighborName] = 1
      }
    })
  })
  // Second pass: use counter to calculate whether cells from first pass should be alive
  forEach(counter, (liveNeighbors, cellName) => {
    const currentState = grid.has(cellName)
    const newCellState = determineNextState(liveNeighbors, currentState)
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
        const cellName = `${i}-${j}`
        grid.add(cellName)
      }
    })
  })
  return grid
}
