import { profileRequest, addBeer, deleteBeer, showBeer } from "../../services/api"

//Make a New Beer
export const newBeer= (user_id,info)=>{
    return (dispatch) =>{
        addBeer(user_id,info)
        .then(data=>dispatch({type: 'ADD_BEER', payload: data}))
    }
            
}

//Show a Beer
export const getBeer= ()=>{
    return (dispatch) =>{
        profileRequest().then(
            showBeer()
            .then(data=>dispatch({type: 'SET_BEER', payload: data})
            )
        )
    }
    
}

    
//Remove Beer
export const removeBeer= (user_id,beer_id)=>{
    return (dispatch) =>{
        profileRequest().then(
            deleteBeer(user_id,beer_id)
        .then(data=> dispatch({type: 'REMOVE_BEER', payload: beer_id})))
    }
 
}




