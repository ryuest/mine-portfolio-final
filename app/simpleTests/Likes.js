import React from 'react'

class Likes extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                  <h2 className="fl">{post.likes}</h2>
                  <button
                  className="likes">&hearts; {post.likes}</button>
                </header>
            </div>
        )
    }
}

export default Likes;
