import React from "react";
import "./Apartment.css";

export const Apartment = props => {
  return (
    <div className="apartment">
      <div className='apartmentcont'>
        <ul>
          <li>{props.name}</li>
          <li>{props.address}</li>
          <li>{props.contact}</li>
          <li>{props.beds}</li>
          <li>{props.price}</li>
        </ul>
      </div>
    </div>
  );

};

export default Apartment;
