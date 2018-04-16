import React from "react";
import "./Apartment.css";

export const Apartment = props => {
  return (
    <div className="apartment">
      <div className='apartmentcont'>
        <h1>Apartment Info:{props.key}</h1>
        <ul >
          <li>Apartment Name: {props.name}</li>
          <li>Address: {props.address} City: {props.city} State: {props.state}</li>
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
