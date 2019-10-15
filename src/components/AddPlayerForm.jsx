import React from 'react'

const AddPlayerForm = ({ addPlayer }) => {
  // refs over controlled components when:
    // constant rendering and validation are NOT required
    // simple forms that need only track the final input data
  let playerInput = React.createRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
    e.currentTarget.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />
      <input
        type="submit"
        value="Add Player"
        />
    </form>
  );

}


export default AddPlayerForm
