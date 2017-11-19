import { REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED } from '../actions/authActionTypes'
import { login, register } from '../../services/auth.service'

function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    }
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

export function redirect() {
    return {
        type: REDIRECTED
    }
}

function registerAction(name, email, password) {
    return (dispatch) => {
        return register(name, email, password)
            .then(json => {
                if (json.success) {
                    dispatch(registerSuccess())
                }
            })
    }
}

function loginAction(email, password) {
    return (dispatch) => {
        return login(email, password)
            .then(json => {
                localStorage.setItem('authToken', json.token)
                localStorage.setItem('user', json.user.name)
                dispatch(loginSuccess())
            })
    }
}

function logoutAction() {
    return (dispatch) => {
        localStorage.clear()
    }
}

export { registerAction, loginAction, logoutAction }