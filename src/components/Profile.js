import React from 'react'
import { getUser, clearUser } from "../redux/actions/userActions";
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { getToken, clearToken } from '../services/local-storage'
import NewBeer from './NewBeer'
import Beer from './Beer'
import { Button } from 'react-bootstrap';

//List all your beers
class Profile extends React.Component{

    componentDidMount(){
        console.log(this.props.user.id)
        this.props.getUser()
    }

   
    handleLogout = () =>{
        clearToken()
        this.props.clearUser()
    }
    

    render(){
        console.log(this.props.user)
        return(
        <div id='Profile'>
           
            {this.props.user.name ? <h1>{this.props.user.name}'s Beer List</h1> : <h1>Looking for your Brewer...</h1>}

            <a1>{getToken() ? <button onClick={this.handleLogout}>Logout</button> : null}</a1>

            {/* <button onClick={href=`http://localhost:3001/beers`}>Beers</button>  */}
            
            

            
            <p>{this.props.beers.map(beer=> <li><Link to={`beer/${beer.id}`}>{beer.name}</Link></li>)}</p>

            {!getToken() ? <Redirect to="/" /> : null} 

            <br/>
            <p>Create a New Beer:</p>
            <NewBeer NewBeer/>
             {/* <a href={`http://localhost:3001/${this.props.user.id}/newbeer`}>Create a New Beer</a> */}
        </div>
        )
    }
    
    
}

const mapStateToProps = state => {
    const {user, beers} = state
    return{
        user, beers
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUser: () => dispatch(getUser()),
        clearUser: ()=>dispatch(clearUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)