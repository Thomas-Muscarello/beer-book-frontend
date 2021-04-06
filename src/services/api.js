import { getToken } from './local-storage'
const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'

const parseJSON= res => res.json()

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

export function authRequest(credentials){
    return fetch(URL + 'authenticate',{
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
}

export function addBeer(user_id, info){
    return fetch(URL + `users/${user_id}/beers`,{
        method: "POST",
        headers: allHeaders(),
        body: JSON.stringify(info)
    })
    .then(parseJSON)
}

export function showBeer(id, user_id){
    return fetch(URL + `/users/${user_id}/beers/:${id}`)
    .then(parseJSON)
}

// export function showAllBeers(){
//     return fetch(URL + `show-all-beers`)
//     .then(parseJSON)
// }

export function profileRequest() {
    return fetch(URL + 'profile', {
      headers: authHeaders()
    })
    .then(parseJSON)
}

export function deleteBeer(user_id,beer_id){
    return fetch(URL + `users/${user_id}/beers/${beer_id}`,{
        method: "DELETE",
        headers: allHeaders()
    })
    .then(parseJSON)
}

export function createUser(user){
    return fetch(URL + "users",{
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify({user})
    }).then(parseJSON)
}