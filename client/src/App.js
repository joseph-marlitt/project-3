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
import RenterDashboard from "./pages/RenterDashboard/RenterDashboard.js";
import ManagerDashboard from "./pages/ManagerDashboard/ManagerDashboard.js";
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
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
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
      authenticated: false
    }
  };

  componentDidMount() {
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
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
                <Link to='/'>Roost</Link>
              </div>
              <div className='top-bar-center'>
                <Link to='/'><img className='roostImage' src={logo} alt={'logo'}/></Link>
              </div>
              <div className='top-bar-right'>
                <Link to='/userform'>New Form</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/learn'>Learn More</Link>
              </div>
                {this.state.authenticated ? (
                  <div className='top-bar-right'>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to='/logout'>Log Out</Link>
                  </div>
                ) : (
                  <div className='top-bar-right'>
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>
                  </div>
                )}
              </div>

            <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path='/dashboard' component={RenterDashboard}/>
            <LoggedOutRoute path='/login' component={LoginPage}
            toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path='/signup' component={SignUpPage}/>
            <Route path='logout' component={LogoutFunction}/>
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
