import React from 'react'
import { authRequest } from '../services/api'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getToken } from '../services/local-storage'

class Login extends React.Component{

    state = {
        name: "",
        password: ""
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {name, password} = this.state
    

        authRequest({name,password})
        .then(res => {
            if (res.error){
                alert('Your Username and/or Password are Incorrect')
            }else{
                localStorage.setItem('jwt', res.jwt)

                this.props.history.push('/profile')
            }
        })
        console.log(this.state)
    }


    handleChangeName = e =>{
        this.setState({name: e.target.value})
    }

    handleChangePassword = e =>{
       this.setState({password: e.target.value})
    }
    render(){
        return(
        <div id='login'>
            {getToken() ? <Redirect to="/profile" /> : null} 
            
            <h1> Brewer Login Page</h1>

            <form onSubmit={this.handleSubmit}>

                <input placeholder='Name' type="text"
                onChange={this.handleChangeName}
                value={this.state.name}
                />

                <input placeholder='Password' type="text"
                onChange={this.handleChangePassword}
                value={this.state.password}
                />

                <input type='submit'
                value="Login"
                />


            </form>
            <h3 className="loginPg"> Don't have an account? Click the <a className='home' href="http://localhost:3001/signup">HERE</a> to Sign Up!</h3>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setUser: user => dispatch({type: 'SET_USER', payload: user})
    }
}

export default connect(null, mapDispatchToProps)(Login)