import React, { Component } from 'react';
import Input from '../shared/Input';
import { connect } from 'react-redux';
import { registerAction, redirect } from '../../core/store/actions/authActions';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.props.register(this.state.name, this.state.email, this.state.password);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.registerSuccess) {
            this.props.redirect();
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        label="E-mail"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <Input
                        name="repeat"
                        type="password"
                        value={this.state.repeat}
                        onChange={this.onChangeHandler}
                        label="Repeat password"
                    />
                    <input type="submit" value="Register" />
                </form>
            </div>
        );
    }
}

function mapState(state) {
    return {
        registerSuccess: state.register.success
    };
}

function mapDispatch(dispatch) {
    return {
        register: (name, email, password) => dispatch(registerAction(name, email, password)),
        redirect: () => dispatch(redirect())
    };
}

export default connect(mapState, mapDispatch)(Register);