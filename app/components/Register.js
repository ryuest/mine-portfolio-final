import React, {Component} from 'react'
import {auth} from './Account'
import {Field, reduxForm} from 'redux-form'

class Register extends Component {
  constructor() {
      super();
      this.state = {
          registerError: null
      }
  }

  setErrorMsg(error) {
      this.setState({registerError: error});
  }
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <div>
                            <Field name="email" component="input" type="text" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">

                        <Field name="password" component="input" type="text" placeholder="Password"/>
                    </div>
                    <div>
                        <button onClick={handleSubmit((data) => {
                            auth(data.email, data.password).catch((error) => {
                                this.setErrorMsg(error.message)
                            })
                        })}>Register</button>
                    </div>
                    {this.state.registerError && <div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span>
                        &nbsp;{this.state.registerError}
                    </div>}
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'register' // a unique identifier for this form
})(Register)
