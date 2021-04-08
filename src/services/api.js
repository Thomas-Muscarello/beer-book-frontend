import { getToken } from './local-storage'
const URL = 'http://localhost:3000/'

//Parse shortcut
const parseJSON= res => res.json()


//Header
const authHeaders = () => ({
    Authorization: `Bearer ${getToken()}`
})

const loginHeaders = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
}

const allHeaders=()=>({
    'Accepts': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
})

//Functions

//Authorize
export function authRequest(credentials){
    return fetch(URL + 'authenticate',{
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
}


//Show Profile
export function profileRequest() {
    return fetch(URL + 'profile', {
        headers: authHeaders()
    })
    .then(parseJSON)
}

//Create User
export function createUser(user){
    return fetch(URL + "users",{
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify({user})
    }).then(parseJSON)
}

//Create Beer
export function addBeer(user_id, info){
    return fetch(URL + `users/${user_id}/beers`,{
        method: "POST",
        headers: allHeaders(),
        body: JSON.stringify(info)
    })
    .then(parseJSON)
}

//Show Beer
export function showBeer(user_id, id){
    return fetch(URL + `/users/${user_id}/beers/:${id}`)
    .then(parseJSON)
}


//Delete Beer
export function deleteBeer(user_id,beer_id){
    return fetch(URL + `users/${user_id}/beers/${beer_id}`,{
        method: "DELETE",
        headers: allHeaders()
    })
    .then(parseJSON)
}

//Update Beer
export function updateBeer(user_id,beer_id,){
    return fetch(URL + `users/${user_id}/beers/${beer_id}`,{
        method: "PATCH",
        headers: allHeaders()
    })
    .then(parseJSON)
}

