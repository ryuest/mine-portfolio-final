import React, {Component} from 'react'
import {login} from './Account'
import {Field, reduxForm} from 'redux-form'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loginMessage: null
        }
    }

    setErrorMsg(error) {
        this.setState({loginMessage: error});
    }
    render() {
        const {handleSubmit} = this.props
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div>
                            <Field name="email" component="input" type="text" placeholder="Email"/>user@test.com
                        </div>
                    </div>
                    <div className="form-group">
                        <Field name="password" component="input" type="text" placeholder="Password"/>password1
                    </div>
                    <div>
                        <button onClick={handleSubmit((data) => {
                            login(data.email, data.password).catch((error) => {
                                this.setErrorMsg('Invalid username/password.')
                            })
                        })}>Login</button>
                    </div>
                    {this.state.loginMessage && <div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span>
                        &nbsp;{this.state.loginMessage}
                    </div>}
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(Login)
