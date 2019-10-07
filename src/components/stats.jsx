import React from 'react'

const Stats = (props) => {

  const totalPlayers = props.players.length

  // total is built up with iteration using the +
  // total's base of 0 is asserted with the }, 0).
  // That zero is the initial value for total to then evaluate against.
  const totalPoints = props.players.reduce((total, player)=> {
    return total + player.score
    }, 0);


  return (
    <table className="Stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{ totalPlayers }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ totalPoints }</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
