import React from 'react'
import { connect } from 'react-redux'
import{newBeer} from '../redux/actions/beerActions'

//Make a new beer
//New beer doesnt stay with user
class NewBeer extends React.Component{

    state={
     name: "",
     malt_type: "",
     malt_amount: 0,
     hop_type: "",
     hop_amount: 0,
     yeast_type: "",
     yeast_amount: 0,
     water_ph: 0,
     water_amount: 0
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
        event.preventDefault()
        this.props.dispatch(newBeer(this.props.user.id, this.state))
        this.setState({
            name: "",
            malt_type: "",
            malt_amount: 0,
            hop_type: "",
            hop_amount: 0,
            yeast_type: "",
            yeast_amount: 0,
            water_ph: 0,
            water_amount: 0
        })
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <form className="newBeer" onSubmit={this.handleSubmit}>
                    <span>Beer Name</span> 
                    <br/>
                    <input type= "text" 
                    onChange={this.handleNameChange}
                    value={this.state.name} required/>
                    <br/>
                    <span>Malt Type</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleMaltTypeChange}
                    value={this.state.malt_type}/>
                    <br/>
                    <span>Malt Amount</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleMaltAmountChange}
                    value={this.state.malt_amount}/>
                    <br/>
                    <span>Hop Type</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleHopTypeChange}
                    value={this.state.hop_type}/>
                    <br/>
                    <span>Hop Amount</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleHopAmountChange}
                    value={this.state.hop_amount}/>
                   <br/>
                    <span>Yeast Type</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleYeastTypeChange}
                    value={this.state.yeast_type}/>
                    <br/>
                    <span>Yeast Amount</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleYeastAmountChange}
                    value={this.state.yeast_amount}/>
                    <br/>
                    <span>Water Ph</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleWaterPhChange}
                    value={this.state.water_ph}/>
                     <br/>
                    <span>Water Amount</span>
                    <br/>
                    <input type= "text" 
                    onChange={this.handleWaterAmountChange}
                    value={this.state.water_amount}/>
                    <br/>
                 
                    <input className='brewBttn' type= "submit" value='Brew'/>
                </form>
            </div>
        )
    }
}

export default connect((state)=> state)(NewBeer)