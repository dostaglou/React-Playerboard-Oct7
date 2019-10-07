// Import React from 'react' => class App extends React.Component
// Import React, { Component } => class App extends Component

import React, { Component } from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'
class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    let newPlayer = {
      name,
      score: 0,
      id: this.state.players.length + 1
    };

    this.setState( prevState => ({
      players: prevState.players.concat(newPlayer)
    }))

  }

  handleScoreChange = (index, value) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += value
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            scoreChange={this.handleScoreChange}
            name={ player.name }
            id={ player.id }
            key={ player.id.toString() }
            removePlayer={ this.handleRemovePlayer }
            score={ player.score }
            index={index}
          />
        )}

        <AddPlayerForm
          addPlayer={ this.handleAddPlayer }
         />
      </div>
    );
  }
}

export default App;
