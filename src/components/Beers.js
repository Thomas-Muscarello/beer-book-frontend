import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { getToken} from '../services/local-storage'
import NavBar from './NavBar'

//List all beers created

class Beers extends React.Component{
  
    showAllBeers = () => {
        return this.props.beers.map(beer => beer.name)
    }
  
    render(){
        return (
            <div>
                <NavBar />
                 {!getToken() ? <Redirect to="/" /> : null} 

                <h3>   All Your Beers   </h3>
                <p>{this.props.beers.map(beer=> <li key={beer.id} className="beerLink"><Link className="beerLink" to={`beer/${beer.id}`}>{beer.name}</Link></li>)}</p>

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

export default connect(mapStateToProps)(Beers)