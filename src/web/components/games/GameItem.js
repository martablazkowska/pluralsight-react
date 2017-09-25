import React from 'react';

const GameItem = ({game}) => {
  return (
    <tr>
        <th>{game.id}</th>
        <th>{game.title}</th>
      </tr>
  )
}

export default GameItem;