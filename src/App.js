import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Beers from "./components/Beers"
import Beer from "./components/Beer"
import './App.css';
import Signup from './components/Signup'
import { getUser, clearUser } from "./redux/actions/userActions";
import { connect } from 'react-redux'
import React from 'react'
import NavBar from './components/NavBar'
import UpdateBeer from './components/UpdateBeer'

class App extends React.Component{

  componentDidMount(){
    this.props.getUser()
  }


  render(){
  return (
    <div className="App">
      
      <Router>
        <Switch>
          
          <Route exact path= "/" render={() => <Home />} />
          <Route path="/login" render={routerProps => <Login {...routerProps} />} />
          <Route exact path= "/signup" render={routerProps => <Signup {...routerProps} />} />
          <div>
          
          <a><NavBar /></a>

          <Route exact path= "/profile" render={() => <Profile />} />
          <Route exact path= "/updateBeer" render={() => <UpdateBeer />} />
          <Route exact path= "/beer/:id" render={routerProps => <Beer {...routerProps} />} />
          <Route exact path= "/beers" render={routerProps => <Beers {...routerProps} />} />
          
          </div>
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => {
  return{
      getUser: () => dispatch(getUser()),
      clearUser: ()=>dispatch(clearUser())
  }
}

export default connect(null,mapDispatchToProps)(App)
