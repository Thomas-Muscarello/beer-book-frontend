import React from 'react'
import { connect } from 'react-redux'
import  { createUser } from '../services/api'

class SignUp extends React.Component {
    
    state ={ 
        name: "",
        password: "",
        message: ""
    }

    handleNameChange = event =>{
        this.setState({name: event.target.value})
    }

    handlePasswordChange = event =>{
        this.setState({password: event.target.value})
    }

    handleSubmit= (event)=>{
        event.preventDefault()
        const {name, password} = this.state

        createUser({name, password}).then(res => {
            if (res.error){
                this.setState({message: res.error})
            }else{
                localStorage.setItem('jwt', res.jwt)
                debugger
                this.props.history.push('/profile')
            }
        })
    }
  

  render() {
    return (
      <div>
          <h1> Sign Up and begin your Beer Book as a Brewer!</h1>
       <form className='signup' onSubmit={this.handleSubmit}>
            Brewer Name
            <input type= "text" 
            onChange={this.handleNameChange}
            value={this.state.name} required/>
            Password
            <input type= "text" 
            onChange={this.handlePasswordChange}
            value={this.state.password} required/>
            <input type= "submit" value= "Signup" />
       </form>
       <p>{this.state.message}</p>

       <span> Already Have an Account?</span>
       <br/>
            <a className='home' href="http://localhost:3001/login">Login</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {user} = state
    return{
        user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      setUser: user => dispatch({type: 'SET_USER', payload: user})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp)