import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        const {loggedIn, onLogout} = this.props

        return (
            <div className="container-fluid">
                <ul className="nav navbar-inverse bg-primary">
                    <li className="nav-item">
                        <NavLink exact to="/" className="navbar-brand nav-link" activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    {!loggedIn && <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="active">
                            Login
                        </NavLink>
                    </li>}

                    {!loggedIn && <li className="nav-item">
                        <NavLink className="nav-link" to="/register" activeClassName="active">
                            Register
                        </NavLink>
                    </li>}

                    {loggedIn && <li className="nav-item">
                        <a href="javascript:void(0)" className="nav-link" onClick={onLogout}>
                            Logout
                        </a>
                    </li>}
                </ul>
            </div>
        )
    }
}