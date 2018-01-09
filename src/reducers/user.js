function userLogin(state = 'USER_NOT_LOGIN', action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return action.text;
        default:
            return state
    }
}

export default user;