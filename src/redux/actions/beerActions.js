import { profileRequest, addBeer, deleteBeer } from "../../services/api"


export const getBeer= ()=>{
    return (dispatch) =>{
        profileRequest().then(response=>{
            dispatch({type: 'SET_BEER', payload: response})
        })
    }
}

export const newBeer= (user_id,info)=>{
    return (dispatch) =>{
        profileRequest().then(
            addBeer(user_id,info)
        .then(data=> dispatch({type: 'ADD_BEER', payload: data})))
    }
            
}
    

export const removeBeer= (user_id,beer_id)=>{
    return (dispatch) =>{
        profileRequest().then(
            deleteBeer(user_id,beer_id)
        .then(data=> dispatch({type: 'REMOVE_BEER', payload: data})))
    }
 
}


