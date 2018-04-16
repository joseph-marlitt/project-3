import React from "react";
import "./UnitList.css";

export const UserList = props => {
  return (
    <div className="userlist">
      <div className='userlistcont'>
        <ul >
          <li>Beds: {props.beds}</li>
          <li>Baths: {props.baths}</li>
          <h3>Price Range From:</h3>
          <li>${props.$from}</li>
          <h3>To:</h3>
          <li>${props.$to}</li>
        </ul>
      </div>
    </div>
  );

};

export default UserList;
