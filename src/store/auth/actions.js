import { notification } from "antd"
import { history } from "../../config/store"
import { authConstants } from "./constants"
import { Login, Main } from '../../constants/paths'

export const login = (data) => (dispatch, getState) => {
    const notifyError = () => {
        notification['error']({
            message: 'Login failed'
        })
    }
    try {
        const store = getState()
        const { email, password } = data
        if (email === store?.authReducer?.initialAccount?.email && password === store?.authReducer?.initialAccount?.password) {
            localStorage.setItem('isAuthorized', true)
            history.push(Main)
            dispatch({ type: authConstants.LOGIN, payload: true })
            notification['success']({
                message: 'Login success'
            })
        } else {
            notifyError()
        }
    } catch (error) {
        notifyError()
        console.log(error)
    }
}

export const logout = () => dispatch => {
    const notifyError = () => {
        notification['error']({
            message: 'Cannot logout'
        })
    }
    try {
        localStorage.removeItem('isAuthorized')
        dispatch({ type: authConstants.LOGOUT })
        history.push(Login)
    } catch (error) {
        notifyError()
        console.log(error)
    }
}