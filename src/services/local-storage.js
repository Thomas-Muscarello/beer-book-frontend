export const getToken = () => {
    return localStorage.getItem('jwt')
}
  
export const setToken = token => {
    return localStorage.setItem('jwt', token)
}
  
export const clearToken = () => {
    return localStorage.removeItem('jwt')
}
