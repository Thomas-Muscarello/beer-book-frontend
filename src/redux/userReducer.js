function userReducer(state = [], action){
    switch (action.type){
        case "SET_USER":
            return action.payload || state
        case "CLEAR_USER":
            return({})
        case "NEW_USER":
            return action.payload
        default:
            return state
    }
}

export default userReducer