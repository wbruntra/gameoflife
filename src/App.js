import * as React from 'react'
import './styles/main.scss'
import { getNextIteration, makeHashGrid, flipCell } from './utils'
import saves from './saves'

class App extends React.Component {
  state = {
    gridSize: 32,
    lifeSeed: 0.2,
    grid: new Set(),
    ticks: 0,
    running: false,
    tickInterval: 210,
    mouseClicked: false,
    wrap: false,
  }

  setGridSize = (size) => {
    const gridSize = Number(size)
    this.setState({
      gridSize,
    })
    this.styles = this.adjustTableStyles(gridSize)
  }

  go = () => {
    const { tickInterval } = this.state
    this.timerId = setInterval(this.iterate, 570 - tickInterval)
    this.setState((prevState) => ({
      running: !prevState.running,
    }))
  }

  stop = () => {
    clearInterval(this.timerId)
    this.setState((prevState) => ({
      running: !prevState.running,
    }))
  }

  handleCellClick = (cellName) => {
    const { grid, running } = this.state
    if (!running) {
      const newGrid = flipCell(cellName, grid)
      this.setState({
        grid: newGrid,
      })
    }
  }

  adjustTableStyles = (gridSize) => {
    const cellWidth =
      window.screen.width > 600
        ? Math.floor(600 / gridSize) - 2
        : Math.floor(window.screen.width / gridSize) - 2
    return {
      width: cellWidth,
      height: cellWidth,
    }
  }

  componentDidMount = () => {
    const { gridSize, lifeSeed } = this.state
    this.styles = this.adjustTableStyles(gridSize)
    this.setState({
      grid: makeHashGrid(lifeSeed, gridSize),
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  iterate = () => {
    const updater = (state) => {
      const { grid, gridSize, ticks, wrap } = state
      const nextGrid = getNextIteration(grid, gridSize, wrap, true)
      return {
        grid: nextGrid,
        ticks: ticks + 1,
      }
    }
    this.setState(updater)
  }

  clearGrid = () => {
    const grid = new Set()
    this.setState({
      grid,
      ticks: 0,
    })
  }

  renderHashGrid = () => {
    const { gridSize, grid } = this.state
    return (
      <table>
        <tbody>
          {[...Array(gridSize).keys()].map((i) => {
            return (
              <tr key={`row-${i}`} className="grid-row">
                {[...Array(gridSize).keys()].map((j) => {
                  const cellName = JSON.stringify([i, j])
                  return (
                    <td
                      style={this.styles}
                      onMouseOver={() => {
                        if (this.state.mouseClicked) {
                          this.handleCellClick(cellName)
                        }
                      }}
                      onClick={() => {
                        this.handleCellClick(cellName)
                      }}
                      key={`cell-${cellName}`}
                      className={`cell`}
                    >
                      <div className={grid.has(cellName) ? 'live' : ''}></div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  handleSliderChange = (e) => {
    const { running, gridSize } = this.state
    if (running) {
      return
    }
    const val = Number(e.target.value) / 100
    this.setState({
      lifeSeed: val,
      grid: makeHashGrid(val, gridSize),
      ticks: 0,
    })
  }

  load = (key) => {
    let savedArray
    if (key === 'default') {
      savedArray = JSON.parse(localStorage.getItem('save') || '[]')
    } else {
      savedArray = JSON.parse(saves[key])
    }
    const grid = new Set(savedArray)
    this.setState({
      grid,
    })
  }

  save = () => {
    const { grid } = this.state
    const save = JSON.parse(localStorage.getItem('save') || '[]')
    const saves = JSON.parse(localStorage.getItem('saves') || '{}')
    const now = new Date()
    const timeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
    const gridString = JSON.stringify(Array.from(grid))
    saves[timeString] = [...grid]
    const savesString = JSON.stringify(saves)
    console.log(savesString)
    localStorage.setItem('save', gridString)
    // localStorage.setItem('saves', saves)
  }

  render() {
    const { grid, gridSize, lifeSeed, ticks, running, tickInterval } = this.state
    const liveCells = grid.size
    return (
      <div className="container">
        <h1>Conway's Game of Life</h1>
        <div className="row">
          <div className="col">
            <p>Iterations: {ticks}</p>
          </div>
          <div className="col">
            <p>Live cells: {liveCells}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2 mb-3 mb-lg-0">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (!running) {
                  this.go()
                } else {
                  this.stop()
                }
              }}
            >
              {!running ? 'GO!' : 'STOP!'}
            </button>
            {!running && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.clearGrid()
                }}
              >
                Clear Grid
              </button>
            )}{' '}
            {!running && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.setState({
                    grid: makeHashGrid(lifeSeed, gridSize),
                    ticks: 0,
                  })
                }}
              >
                Random
              </button>
            )}{' '}
            {!running && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.iterate()
                }}
              >
                Step
              </button>
            )}{' '}
            {!running && (
              <>
                <button className="btn btn-primary" onClick={this.save}>
                  Save
                </button>
                <button className="btn btn-primary" onClick={() => this.load('default')}>
                  Load
                </button>
              </>
            )}
            {!running && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.load('HO')
                }}
              >
                Preset
              </button>
            )}
          </div>

          <div className="col-lg-10">{this.renderHashGrid(grid)}</div>
        </div>
        <div className="row">
          <div className="col-8">
            {!running ? (
              <div>
                <div className="form-check">
                  <input
                    onChange={() => {
                      this.setState((prevState) => ({ wrap: !prevState.wrap }))
                    }}
                    className="form-check-input"
                    checked={this.state.wrap}
                    type="checkbox"
                    id="defaultCheck1"
                  />

                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Round world?
                  </label>
                </div>

                <div>
                  <label className="mr-3" htmlFor="densityRange">
                    Initial Density
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={lifeSeed * 100}
                    className="custom-range"
                    onChange={this.handleSliderChange}
                    id="densityRange"
                  />
                </div>
                <div>
                  <label className="mr-3" htmlFor="grid-size">
                    Grid Size
                  </label>
                  <input
                    id="grid-size"
                    type="number"
                    min="10"
                    max="50"
                    value={this.state.gridSize}
                    onChange={(e) => {
                      this.setGridSize(e.target.value)
                    }}
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="mr-3" htmlFor="customRange1">
                  Slower/Faster
                </label>
                <input
                  type="range"
                  className="custom-range"
                  id="customRange1"
                  min="3"
                  max="51"
                  step="6"
                  value={tickInterval / 10}
                  onChange={(e) => {
                    const newInterval = Number(e.target.value) * 10
                    clearInterval(this.timerId)
                    this.timerId = setInterval(this.iterate, 570 - newInterval)
                    this.setState({
                      tickInterval: newInterval,
                    })
                  }}
                ></input>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className={`explanation ${this.state.explanation} ? 'show' : ''`}>
            <p>
              <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wikipedia</a>
            </p>
            <ul>
              <li>Each cell has 8 neighboring cells</li>
              <li>A live cell with 2 or 3 live neighbors will continue to the next iteration</li>
              <li>A dead cell with exactly 3 live neighbors will come to life</li>
              <li>A live cell with 4 or more live neighbors will die, as if by overpopulation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
