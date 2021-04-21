import React from 'react'
import { getUser} from "../redux/actions/userActions";
import { getBeer} from "../redux/actions/beerActions";
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { getToken } from '../services/local-storage'
import NewBeer from './NewBeer'
import NavBar from './NavBar'

//List all your beers
class Profile extends React.Component{

    componentDidMount(){
        this.props.getUser()
        this.props.getBeer()
    }

    render(){
        return(
        <div>
            {!getToken() ? <Redirect to="/" /> : null} 
            <NavBar />
           
            {this.props.user.name ? <h1>{this.props.user.name}'s Beer List</h1> : <h1>Looking for your Brewer...</h1>}

            <p className="beerList">{this.props.beers.map(beer=> <li key={beer.id} className="beerLink"><Link className="beerLink" to={`beer/${beer.id}`}>{beer.name}</Link><br/></li>)}</p>

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