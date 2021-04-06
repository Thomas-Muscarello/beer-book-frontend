import {Link} from 'react-router-dom'
import React from 'react'
import { getToken, clearToken } from '../services/local-storage'

class NavBar extends React.Component{
   
    // handleLogout = () =>{
    //     clearToken()
    //     this.props.clearUser()
    // }

    render(){
        return(
            <nav>
                <Link to="/profile" >Profile</Link>
                <br/>
                <Link to="/beers" >Beers</Link>
                {/* {getToken() ? <button onClick={this.handleLogout}>Logout</button> : null} */}
            </nav>

        )
    }
}
export default NavBar