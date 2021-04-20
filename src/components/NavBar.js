import React from 'react'
import { getToken, clearToken} from '../services/local-storage'
import { connect } from 'react-redux'
import { getUser, clearUser } from "../redux/actions/userActions";
import {Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


class NavBar extends React.Component{
   
    handleLogout = () =>{
        clearToken()
        this.props.clearUser()
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <p>{!getToken() ? <Redirect to="/" /> : null}</p>
            <p>{getToken() ? <button className='logoutBttn' onClick={this.handleLogout}>Logout</button> : null}</p>
            <Navbar.Brand> The Beer-Book </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/beers">Beers</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getUser: () => dispatch(getUser()),
        clearUser: ()=>dispatch(clearUser())
    }
}



export default connect(null,mapDispatchToProps)(NavBar)