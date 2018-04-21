import React from 'react';
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
