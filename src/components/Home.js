import React from 'react'
//Home Page
class Home extends React.Component{
    render(){
        return(
        <div id='home'>
            <h1> Welcome to Beer Book</h1>
            <h3>
                <h2> Already Have an Account?</h2>
            <a href="http://localhost:3001/login">Login</a>
            <br/>
            <h2> New User?</h2>
            <a href="http://localhost:3001/signup">SignUp</a>
            </h3>
        </div>
        )
    }
}
export default Home