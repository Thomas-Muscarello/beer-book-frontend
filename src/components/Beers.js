import { connect } from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'

//List all beers created

class Beers extends React.Component{
  
    showAllBeers = () => {
        return this.props.beers.map(beer => beer.name)
    }
  
    render(){
        const beers = this.showAllBeers()
        return (
            <div>
                <h3>   All Your Beers   </h3>
                <p>{this.props.beers.map(beer=> <li><Link to={`beer/${beer.id}`}>{beer.name}</Link></li>)}</p>

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