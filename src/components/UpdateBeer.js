import React from 'react'
import { connect } from 'react-redux'
import { getUser} from "../redux/actions/userActions";
import { changeBeer } from "../redux/actions/beerActions";


class UpdateBeer{

    findBeer = () =>{
        return this.props.beers.find(beer=>beer.id===parseInt(this.props.match.params.id))
    }

    updateBeer = () =>{
        this.props.changeBeer(this.props.user.id, parseInt(this.props.match.params.id))
        //redirect to profile
    }

    state={
        name: this.props.beer.name,
        malt_type: this.props.beer.malt_type,
        malt_amount: this.props.beer.malt_amount,
        hop_type: this.props.beer.hop_type,
        hop_amount: this.props.beer.hop_amount,
        yeast_type: this.props.beer.yeast_type,
        yeast_amount: this.props.beer.yeast_amount,
        water_ph: this.props.beer.water_ph,
        water_amount: this.props.beer.water_amount
    }

    
    //Change Beer attributes
     handleNameChange = event =>{
        this.setState({name: event.target.value})
    }

    handleMaltTypeChange = event =>{
        this.setState({malt_type: event.target.value})
    }

    handleMaltAmountChange = event =>{
        this.setState({malt_amount: event.target.value})
    }

    handleHopTypeChange = event =>{
        this.setState({hop_type: event.target.value})
    }

    handleHopAmountChange = event =>{
        this.setState({hop_amount: event.target.value})
    }

    handleYeastTypeChange = event =>{
        this.setState({yeast_type: event.target.value})
    }

    handleYeastAmountChange = event =>{
        this.setState({yeast_amount: event.target.value})
    }
    
    handleWaterPhChange = event =>{
        this.setState({water_ph: event.target.value})
    }

    handleWaterAmountChange = event =>{
        this.setState({water_amount: event.target.value})
    }

//Submit the form
    handleSubmit= (event)=>{
        //Send information to reducer
        this.props.changeBeer(this.props.user.id, this.state.id)
        console.log(this.props)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <a>Beer Name</a>
                    <input type= "text" 
                    onChange={this.handleNameChange}
                    value={this.state.name}/>
                    <br>
                    </br>
                    <a>Malt Type</a>
                    <input type= "text" 
                    onChange={this.handleMaltTypeChange}
                    value={this.state.malt_type}/>
                     <br>
                    </br>
                    <a>Malt Amount</a>
                    <input type= "text" 
                    onChange={this. handleMaltAmountChange}
                    value={this.state.malt_amount}/>
                     <br>
                    </br>
                    <a>Hop Type</a>
                    <input type= "text" 
                    onChange={this.handleHopTypeChange}
                    value={this.state.hop_type}/>
                     <br>
                    </br>
                    <a>Hop Amount</a>
                    <input type= "text" 
                    onChange={this.handleHopAmountChange}
                    value={this.state.hop_amount}/>
                     <br>
                    </br>
                    <a>Yeast Type</a>
                    <input type= "text" 
                    onChange={this.handleYeastTypeChange}
                    value={this.state.yeast_type}/>
                     <br>
                    </br>
                    <a>Yeast Amount</a>
                    <input type= "text" 
                    onChange={this.handleYeastAmountChange}
                    value={this.state.yeast_amount}/>
                     <br>
                    </br>
                    <a>Water Ph</a>
                    <input type= "text" 
                    onChange={this.handleWaterPhChange}
                    value={this.state.water_ph}/>
                     <br>
                    </br>
                    <a>Water Amount</a>
                    <input type= "text" 
                    onChange={this.handleWaterAmountChange}
                    value={this.state.water_amount}/>
                    <br/>
                    <input type= "submit" value='Brew'/>
                </form>
            </div>
        )
    }
    
      
}
const mapDispatchToProps = dispatch => {
    return{
        getUser: () => dispatch(getUser()),
        changeBeer: (user_id,beer_id)=>dispatch(changeBeer(user_id,beer_id))
    }
}

export default connect(((state)=> state),(mapDispatchToProps))(UpdateBeer)