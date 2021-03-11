import { combineReducers } from "redux";
import { authConstants } from "../auth/constants";


const tictactoeReducer = combineReducers({
})

const main = (state, action) => {
    const { type } = action
    if (type === authConstants.LOGOUT) {
        return {}
    }
    return tictactoeReducer(state, action)
}

export default main