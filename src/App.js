import * as React from 'react'
// import Button from '@material-ui/core/Button'
import './main.scss'
import { getNextIteration, makeHashGrid, flipCell } from './utils'
import saves from './saves'

class App extends React.Component {
  state = {
    gridSize: 48,
    lifeSeed: 0.2,
    grid: new Set(),
    ticks: 0,
    running: false,
    tickInterval: 210,
    mouseClicked: false,
  }

  go = () => {
    const { tickInterval } = this.state
    this.timerId = setInterval(this.iterate, 570 - tickInterval)
    this.setState({
      running: true,
    })
  }

  stop = () => {
    clearInterval(this.timerId)
    this.setState({
      running: false,
    })
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

  componentDidMount = () => {
    const { gridSize, lifeSeed } = this.state
    const cellWidth =
      window.screen.width > 600
        ? Math.floor(600 / gridSize) - 2
        : Math.floor(window.screen.width / gridSize) - 2
    this.styles = {
      width: cellWidth,
      height: cellWidth,
    }
    this.setState({
      grid: makeHashGrid(lifeSeed, gridSize),
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  iterate = () => {
    const updater = (state) => {
      const { grid, gridSize, ticks } = state
      const nextGrid = getNextIteration(grid, gridSize)
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
                  const cellName = `${i}-${j}`
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
                      className={grid.has(cellName) ? 'black cell' : 'cell'}
                    />
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
    const grid = new Set(saves[key])
    this.setState({
      grid,
    })
  }

  save = () => {
    const { grid } = this.state
    const saves = JSON.parse(localStorage.getItem('saves') || '{}')
    const now = new Date()
    const timeString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
    const gridString = JSON.stringify(Array.from(grid))
    saves[timeString] = grid
    console.log(saves)
  }

  render() {
    const { grid, gridSize, lifeSeed, ticks, running, tickInterval } = this.state
    return (
      <div
        className="container"
        // onPointerDown={() => {
        //   this.setState({ mouseClicked: true });
        // }}
        // onPointerUp={() => {
        //   this.setState({ mouseClicked: false });
        // }}
      >
        <p>Ticks: {ticks}</p>
        {this.renderHashGrid(grid)}
        <div className="row">
          <div className="section">
            {!running && (
              <button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.clearGrid()
                }}
              >
                Clear Grid
              </button>
            )}{' '}
            {!running && (
              <button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.setState({
                    grid: makeHashGrid(lifeSeed, gridSize),
                    ticks: 0,
                  })
                }}
              >
                Random Grid
              </button>
            )}{' '}
            {!running && (
              <button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.iterate()
                }}
              >
                Step
              </button>
            )}{' '}
            <button
              variant="contained"
              color="primary"
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
            {/* <button color="primary" onClick={this.save}>
              Save
            </button> */}
            {!running && (
              <button
                color="primary"
                onClick={() => {
                  this.load('HO')
                }}
              >
                CLICK HERE!
              </button>
            )}
          </div>
        </div>
        <div className="row">
          {/* <Slider
              style={{width: '400px'}}
              value={100 - lifeSeed * 100}
              aria-labelledby="label"
              onChange={this.handleSliderChange}
            /> */}
          {!running ? (
            <input
              type="range"
              min="1"
              max="50"
              value={lifeSeed * 100}
              className="slider"
              onChange={this.handleSliderChange}
            />
          ) : (
            <div>
              <label>Slower/Faster</label>
              <input
                type="range"
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
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
