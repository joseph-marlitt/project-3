import React from "react";
import "./Apartment.css";

export const Apartment = props => {
  return (
    <div className="apartment">
      <div className='apartmentcont'>
        <ul >
          <li>Apartment Name: {props.name}</li>
          <li>Address: {props.address} City: {props.city} State: {props.state}</li>
          <li>Phone: {props.contact}</li>
          <li>Number of Beds: {props.beds}</li>
          <li>Price: ${props.price}</li>
        </ul>
      </div>
    </div>
  );

};

export default Apartment;
