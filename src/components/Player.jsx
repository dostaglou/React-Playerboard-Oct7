import React from 'react'
import Counter from './Counter'

class Player extends React.PureComponent {
  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      scoreChange
    } = this.props

    return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        { name }
      </span>
      <Counter
          index={index}
          score={score}
          scoreChange={scoreChange}/>
    </div>
  );
  }
}

export default Player

