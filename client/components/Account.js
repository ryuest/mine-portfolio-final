import React from 'react';
import {ref, firebaseAuth} from '../data/baseConfig'
import Login from './Login'
import Register from './Register'

class Account extends React.Component {
    constructor() {
        super();
        this.state = {
            authed: false,
            loading: true
        }
    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({authed: true, loading: false})
            } else {
                this.setState({authed: false, loading: false})
            }
        })
    }

    render() {
        return (
            <div className="account-container">
                        {this.state.authed
                            ? <button style={{
                                    border: 'none',
                                    background: 'transparent'
                                }} onClick={() => {
                                    logout()
                                }} className="navbar-brand">Logout</button>
                            : <div className="account-row">
                <Login authed={this.state.authed} />
                <Register authed={this.state.authed} />
            </div>}

            </div>
        )
    }
}

export function auth(email, pw) {
    return firebaseAuth().createUserWithEmailAndPassword(email, pw).then(saveUser)
}

export function logout() {
    return firebaseAuth().signOut()
}

export function login(email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export default Account;
