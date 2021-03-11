import { combineReducers } from "redux";
import { authConstants } from "./constants";

const initialAccount = () => {
    return ({
        email: 'test@example.com',
        password: '123456'
    })
}

const isAuthorized = (state = false, action) => {
    const {type, payload} = action
    switch (type) {
        case authConstants.LOGIN:
            return payload
        default:
            return state
    }
}

const authReducer = combineReducers({
    initialAccount,
    isAuthorized
})

const main = (state, action) => {
    const { type } = action
    if (type === authConstants.LOGOUT) {
        return {}
    }
    return authReducer(state, action)
}

export default main