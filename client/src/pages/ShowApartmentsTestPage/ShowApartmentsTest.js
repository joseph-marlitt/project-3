import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";
import {Apartment} from "../../components/Apartment/Apartment.js";
// using renter as default test object, value will be replaced with current logged in user, or the "renter" who just submitted the form.
import renter from './renter.json'

class ShowApartmentsTest extends Component {

  state = {
    apartments: [],
    renter
  };
  calcDist = (lat1, lat2, lon1, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a =
       0.5 - Math.cos(dLat)/2 +
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLon))/2;

    return R * 2 * Math.asin(Math.sqrt(a));
  };

showApartments = () => {
  const testAptLat = 30.397194;
  const testAptLon = -97.702681;
  const testRentLat = this.state.renter[0].address.lat;
  const testRentLon = this.state.renter[0].address.lon;

  console.log(this.state.renter[0].firstName)
  console.log(this.calcDist(testAptLat, testRentLat, testAptLon, testRentLon))
  API.getApartments()
    .then(res =>
      // console.log(res.data))
      this.setState({ apartments: res.data }))
    .catch(err => console.log(err));
  console.log('test')
};

  render() {
    return (
      <Provider store={store}>
        <div>List of Apartments
            {this.state.apartments.map(apartment => (
              <Apartment
                key={apartment._id}
                name={apartment.name}
                address={apartment.address.street1}
                city={apartment.address.city}
                state={apartment.address.state}
                contact={apartment.contactInfo.phone1}
                beds={apartment.beds[0].number}
                price={apartment.beds[0].maxRent}
              />
            ))}
          <div>
            <h1>List
              <button type='submit' onClick={this.showApartments}>Test</button>
            </h1>
          </div>
        </div>
      </Provider>
    );
  }
}

export default ShowApartmentsTest;