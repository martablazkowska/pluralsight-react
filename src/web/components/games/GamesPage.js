/**
 * Created by martablazkowska on 23.09.2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameActions from '../../../actions/gameActions';
import GamesList from './GamesList';

class GamesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: {
        id: null,
        title: ''
      }
    }

    this.setGameTitle = this.setGameTitle.bind(this);
    this.addGame = this.addGame.bind(this);
  }

  setGameTitle(event) {
    const game = this.state.game;
    game.title = event.target.value;
    this.setState({game: game});
  }

  addGame(event) {
    this.state.game.id = Math.floor((Math.random() * 1000) + 1);
    this.props.actions.createGame(this.state.game);
    this.state.game.title = '';
  }

  gameRow(game, index) {
    return (
      <div key={index}>
        {game.title}
      </div>
    )
  }

  render() {
    const {games} = this.props;

    return(
      <div>
        <h1>Games Page</h1>
        <GamesList games={games} />
        {/*{this.props.games.map(this.gameRow)}*/}
        <h2>Add game</h2>
        {this.state.game.title}
        <div>
          <input type="text" value={this.state.game.title} onChange={this.setGameTitle} />
          <input type="button" value="Add game" onClick={this.addGame} />
        </div>
      </div>
    )
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);