import * as types from '../actions/actionTypes';

export default function gameReducer(state = [], action) {
  switch (action.type) {
    case types.GAME_CREATE:
      return [...state,
      Object.assign({}, action.game)
      ]
    case types.LOAD_GAMES_SUCCESS:
      return action.games;
    default:
      return state;
  }
}