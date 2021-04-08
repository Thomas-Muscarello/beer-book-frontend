import React from 'react'
import { connect } from 'react-redux'
import { removeBeer } from "../redux/actions/beerActions";
import { getUser} from "../redux/actions/userActions";
import { getToken} from '../services/local-storage'
import { Redirect } from 'react-router-dom'

//List the 1 beer you selected

class Beer extends React.Component{

    //SEARCH FOR A SPECIFC BEER
    findBeer = () =>{
    return this.props.beers.find(beer=>beer.id===parseInt(this.props.match.params.id))
    }

    deleteBeer = () =>{
        this.props.removeBeer(this.props.user.id, parseInt(this.props.match.params.id))
        alert("Your beer was deleted")
        this.props.history.push('/profile')
        //redirect to profile
    }


   render(){
       const beer= this.findBeer()
       console.log(this.props)
       return(
           <div>
                {!getToken() ? <Redirect to="/" /> : null} 
               {beer
                ?
                (
                    <div>
                     <h1>Beer Name: {beer && beer.name }</h1>
                     <p> Malt Type: {beer && beer.malt_type }</p>
                     <p> Malt Amount: {beer && beer.malt_amount }</p>   
                     <p> Hop Type: {beer && beer.hop_type }</p>   
                     <p> Hop Amount: {beer && beer.hop_amount }</p>
                     <p> Yeast Type: {beer && beer.yeast_type }</p>   
                     <p> Yeast Amount: {beer && beer.yeast_amount }</p>
                     <p> Water Ph: {beer && beer.water_ph }</p>   
                     <p> Water Amount: {beer && beer.water_amount}</p> 
                     <button onClick={this.deleteBeer}>Delete Beer</button> 
                     </div>             

                )
                :
                <h1> This beer does not exist </h1>
               }
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
        removeBeer: (user_id,beer_id)=>dispatch(removeBeer(user_id,beer_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Beer)