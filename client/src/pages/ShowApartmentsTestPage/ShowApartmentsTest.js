import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";
import {Apartment} from "../../components/Apartment/Apartment.js";

class ShowApartmentsTest extends Component {
  state = {
    apartments: []
  };

showApartments = () => {
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
                name={apartment.name}
                address={apartment.address.street1}
                contact={apartment.contactInfo.phone1}
                beds={apartment.beds.number}
                price={apartment.beds.maxRent}
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
