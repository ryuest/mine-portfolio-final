import React, { Component } from 'react';
import GameXO from '../simpleTests/gameXO';

class Game extends Component {
render() {
    return (
      <div className="examples">
        <h3>Details for: TO-DO</h3>
        <div className="example">
            <GameXO/>
        </div>
        <div className="example">
            <Likes
              log={this.props.log}
              posts={this.props.posts}/>
        </div>
      </div>
    );
  }
}

class Likes extends React.Component {
    render() {
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                    <h2 className="fl">Likes</h2>
                    <button onClick={() => this.props.log()} className="likes">&hearts; {this.props.posts[0].likes}</button>
                </header>
            </div>
        )
    }
}

export default Game;
