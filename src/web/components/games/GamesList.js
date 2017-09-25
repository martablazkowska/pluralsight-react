import React from 'react';
import GameItem from './GameItem';

const GamesList = ({games}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
      {games.map(game => {
        return <GameItem key={game.id} game={game} />;
      })}
      </tbody>
    </table>
  )
}

export default GamesList;