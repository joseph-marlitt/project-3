import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import { Redirect } from 'react-router-dom';

class LogoutFunction extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    // location.reload()

  }

  render() {
    // this.props.logOut;
    return (
      <Redirect to="/" />
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
