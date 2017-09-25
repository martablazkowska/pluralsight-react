import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function createGame(game) {
  return {type: types.GAME_CREATE, game};
}

function loadGamesSuccess(games) {
  return {type: types.LOAD_GAMES_SUCCESS, games};
}

export function loadGames() {
  return function(dispatch) {
    return CourseApi.getAllCourses().then(games => {
      dispatch(loadGamesSuccess(games))
    }).catch(error => {
      console.log(error);
    });
  };

}