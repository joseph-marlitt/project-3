import React from "react";
import "./Apartment.css";

export const Apartment = props => {
  return (
    <div className="apartment">
      <div className='apartmentcont'>
        <h3>{props.name}</h3>
        <ul className="apartmentDetails">
          <li>Address: {props.address}</li>
          <li>City: { props.city }, { props.state }</li>
          <li>Phone: {props.contact}</li>
        </ul>
      </div>
    </div>
  );

};

export default Apartment;

// function geoconversion(address, city, state) {
//   return get(googlemapsapi/whatever/ + address + city + state)
//   const lat;
//   const lon;
// }
