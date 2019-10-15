import React from 'react';
import PropTypes from 'prop-types'
import Stats from './stats';
import Stopwatch from './Stopwatch'
const Header = ({ players, title }) => {
  return (
    <header>
      <Stats
      players={players}/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object),
}
// if no prop is passed, this default is ued
Header.defaultProps = {
  title: "Scoreboard",
}
export default Header
