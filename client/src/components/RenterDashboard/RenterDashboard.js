import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RenterDashboard from "./containers/RenterDashboard.jsx";
import ManagerDashboard from "./containers/ManagerDashboard.jsx";

const Dashboard = ({ secretData, user }) => {
  if (user.type === 'Renter') {
    return(
      <RenterDashboard/>


  )
} else {
  return(
    <ManagerDashboard>
      <div>
        test
      </div>
    </ManagerDashboard>
  )
}
  };

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};


export default Dashboard;
