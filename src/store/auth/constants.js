const actionTitle = 'auth'

const createAction = (action) => `${actionTitle}/${action}`

export const authConstants = {
    LOGIN: createAction('LOGIN'),
    LOGOUT: createAction('LOGOUT')
}