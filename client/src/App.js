import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import UserForm from "./pages/UserForm/UserForm.js";
import Home from "./pages/Home/Home.js";
import ManagerForm from "./pages/ManagerForm/ManagerForm.js";
import RenterDashboard from "./containers/RenterDashboard.jsx";
import ManagerDashboard from "./containers/ManagerDashboard.jsx";
import Auth from './modules/Auth';
import logo from "./roost.png"

// Passport Functionality:
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>  (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: false,
      authenticated: false,
      userType: ''
    }
  };

  componentDidMount() {
    this.toggleAuthenticateStatus();
    this.getUserType();
  }

  getUserType() {

  }

  logOut() {
    console.log("logging out");
    Auth.deauthenticateUser();
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    console.log(this.state.authenticated)
    this.setState({ authenticated: Auth.isUserAuthenticated()})
  }

// current Dashboard path is for Renters only - Managers Dashboard to be added
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Wrapper>
        <Router>
          <div>
            <div className='top-bar'>
              <div className='top-bar-left'>
                <Link className="navButton" id="roostTitle" to='/'>Roost</Link>
              </div>
              <div className='roostIcon'>
                <img className='roostImage' src={logo} alt={'logo'}/>
              </div>
                {this.state.authenticated ? (
                  <div className='top-bar-right'>
                    <ul className="listNav">
                      <li><Link className="navButton" to="/dashboard">Dashboard</Link></li>
                      <li><Link className="navButton" to='/userform'>New Form</Link></li>
                      <li><Link className="navButton" to='/about'>About Us</Link></li>
                      <li><Link className="navButton" to='/learn'>Learn More</Link></li>
                      <li><Link className="navButton" to='/logout'>Log Out</Link></li>
                    </ul>
                  <div className="select-style">
                    <select className="selectNav">
                      <option><Link className="navButton" to="/dashboard">Dashboard</Link></option>
                      <option><Link className="navButton" to='/userform'>New Form</Link></option>
                      <option><Link className="navButton" to='/about'>About Us</Link></option>
                      <option><Link className="navButton" to='/learn'>Learn More</Link></option>
                      <option><Link className="navButton" to='/logout'>Log Out</Link></option>
                    </select>
                  </div>
                </div>

                ) : (
                  <div className='top-bar-right'>
                    <ul className="listNav">
                    <li><Link className="navButton" to="/login">Log in</Link></li>
                    <li><Link className="navButton" to="/signup">Sign up</Link></li>
                    <li><Link className="navButton" to='/userform'>New Form</Link></li>
                    <li><Link className="navButton" to='/about'>About Us</Link></li>
                    <li><Link className="navButton" to='/learn'>Learn More</Link></li>
                    </ul>
                    <div className="select-style" >
                      <select className="selectNav">
                        <option><Link className="navButton" to="/login">Log in</Link></option>
                        <option><Link className="navButton" to="/signup">Sign up</Link></option>
                        <option><Link className="navButton" to='/userform'>New Form</Link></option>
                        <option><Link className="navButton" to='/about'>About Us</Link></option>
                        <option><Link className="navButton" to='/learn'>Learn More</Link></option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

            <PropsRoute exact path="/" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path='/dashboard' component={RenterDashboard}/>
            <LoggedOutRoute path='/login' component={LoginPage}
            toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path='/signup' component={SignUpPage}/>
            <Route path='/logout' component={() =>        <LogoutFunction logOut={this.logOut()}/>
            }/>
            <Route exact path="/userform" component={UserForm} />
            <Route exact path="/managerform" component={ManagerForm} />
          </div>
        </Router>
        </Wrapper>
      </MuiThemeProvider>
    )
  }
}

export default App;
