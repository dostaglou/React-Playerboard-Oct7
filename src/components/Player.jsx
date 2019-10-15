import React from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'
import Icon from './Icon'
class Player extends React.PureComponent {
  // static is an option for classes
  // static appears as the top to make it obvious
  // static doesn't require instantiating the class

  static propTypes = {
    scoreChange: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  }

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
        <Icon isHighScore={this.props.isHighScore} />
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

