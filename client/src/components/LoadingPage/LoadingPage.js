import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RenterDashboard from "../../containers/RenterDashboard.jsx";
import ManagerDashboard from "../../containers/ManagerDashboard.jsx";

const LoadingPage = ({ secretData, user }) => {
  if (user.type === 'Renter') {
    return(
      <RenterDashboard userId={user._id}/>
    )
  } else {
    return(
      <ManagerDashboard userId={user._id}/>
    )
  }
}

export default LoadingPage;
