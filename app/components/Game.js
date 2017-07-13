import React, {Component} from 'react';
import GameXO from '../simpleTests/gameXO';
import ButtonLink from './ButtonLink';

const Game = ({posts, log}) => {
    return (
        <div className="examples">
            <h3>Tic Tac Toe is to get three in a row</h3>
            <ButtonLink/>
            <div className="example">
                <GameXO/>
            </div>
            <div className="example">
                <Likes posts={posts} log={log}/>
            </div>
        </div>
    );
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
