import React from 'react'
import { getUser} from "../redux/actions/userActions";
import { getBeer} from "../redux/actions/beerActions";
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { getToken } from '../services/local-storage'
import NewBeer from './NewBeer'


//List all your beers
class Profile extends React.Component{

    componentDidMount(){
        console.log(this.props.user.id)
        this.props.getUser()
        this.props.getBeer()
    }


    

    render(){
        console.log(this.props.user)
        return(
        <div id='Profile'>
            {!getToken() ? <Redirect to="/" /> : null} 
           
            {this.props.user.name ? <h1>{this.props.user.name}'s Beer List</h1> : <h1>Looking for your Brewer...</h1>}

            
            <p>{this.props.beers.map(beer=> <li className="beerLink"><Link className="beerLink" to={`beer/${beer.id}`}>{beer.name}</Link></li>)}</p>


            <br/>
            <p className='createNew'>Create a New Beer:</p>
            <NewBeer NewBeer/>
         
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
        getBeer: () => dispatch(getBeer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)