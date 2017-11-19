import React, { Component } from 'react'
import Input from '../shared/Input'
import { connect } from 'react-redux'
import { registerAction, redirect } from '../../core/store/actions/authActions'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault()

        this.props.register(this.state.name, this.state.email, this.state.password)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.registerSuccess) {
            this.props.redirect()
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <div className="text-center">
                        <h1 className="text-format-large">Register</h1>
                    </div>
                </div>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <Input
                            name="name"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                            label="Name"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Password"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="repeat"
                            type="password"
                            value={this.state.repeat}
                            onChange={this.onChangeHandler}
                            label="Repeat password"
                        />
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-4 offset-4">
                                <input className="btn btn-block btn-primary" type="submit" value="Register"/>
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
        registerSuccess: state.register.success
    }
}

function mapDispatch(dispatch) {
    return {
        register: (name, email, password) => dispatch(registerAction(name, email, password)),
        redirect: () => dispatch(redirect())
    }
}

export default connect(mapState, mapDispatch)(Register)