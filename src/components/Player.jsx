import React from 'react'
import Counter from './Counter'
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter
          index={props.index}
          score={props.score}
          scoreChange={props.scoreChange}/>
    </div>
  );
}


export default Player
