export default(state = [], action)=>{
    switch (action.type){
        case "SET_BEER":
            return action.payload.beers || state
        case "ADD_BEER":
            //Have already tried debugger
            return [...state, action.payload]
        case "REMOVE_BEER":
            return state.filter(item => item.id !==action.payload)
        case "SET_USER":
            //DRILLING INTO THE USERS AND MAKING STATE FOR BEERS
            return action.payload.beers || state
        default:
            return state
    }
}