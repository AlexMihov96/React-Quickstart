import React, { Component } from 'react'
import Input from '../shared/Input'
import { connect } from 'react-redux'
import { loginAction, redirect } from '../../core/store/actions/authActions'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault()
        this.props.login(this.state.email, this.state.password)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loginSuccess) {
            this.props.redirect()
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <div className="text-center">
                        <h1 className="text-format-large">Login</h1>
                    </div>
                </div>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"/>
                    </div>

                    <div className="form-group">
                        <Input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Password"/>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-4 offset-4">
                                <input className="btn btn-block btn-primary" type="submit" value="Login"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapState(state) {
    return {
        loginSuccess: state.login.success
    }
}

function mapDispatch(dispatch) {
    return {
        login: (email, password) => dispatch(loginAction(email, password)),
        redirect: () => dispatch(redirect())
    }
}

export default connect(mapState, mapDispatch)(Login)