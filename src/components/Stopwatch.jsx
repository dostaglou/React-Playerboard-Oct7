import React from 'react'

class Stopwatch extends React.Component {
  state = {
    isRunning: false
  };

  render(){
    return (
      <div className="Stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button>{ this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch
