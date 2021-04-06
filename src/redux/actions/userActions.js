import { profileRequest } from "../../services/api"

export const getUser= ()=>{
    return (dispatch) =>{
        profileRequest().then(response=>{
            dispatch({type: 'SET_USER', payload: response})
        })
    }
}

export const clearUser= ()=>{
    return ({type: 'CLEAR_USER'})  
}

export const newUser= ()=>{
    return (dispatch) =>{
        profileRequest().then(response=>{
            dispatch({type: 'NEW_USER', payload: response})
        })
    }
}
