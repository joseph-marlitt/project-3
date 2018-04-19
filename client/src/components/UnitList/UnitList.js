import React from "react";
import "./UnitList.css";

export const UserList = props => {
  return (
    <div className="userlist">
      <div className='userlistcont'>
        <ul className='apartmentList'>
          <li className='apartmentListItem'>Beds: {props.beds}</li>
          <li className='apartmentListItem'>Baths: {props.baths}</li>
          <li className='apartmentListItem'>Range of Rent: </li>
          <li>${props.$from} - ${props.$to}</li>
        </ul>
      </div>
    </div>
  );

};

export default UserList;
