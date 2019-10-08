import React from 'react'

class Stopwatch extends React.Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0

  };

handleStopwatch = () => {
  this.setState( prevState => ({
    isRunning: !prevState.isRunning
  }));
  if (!this.state.isRunning) {
    this.setState({ previousTime: Date.now() })
  }
}

componentDidMount() {
  this.intervalID = setInterval(() => this.tick(), 100)
}

tick = () => {
  if (this.state.isRunning) {
    const now = Date.now()
    this.setState( prevState => ({
      previousTime: now,
      elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
    }))
  }
}

  render(){
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="Stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds} sec</span>
        <button onClick={this.handleStopwatch}>
          { this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch
