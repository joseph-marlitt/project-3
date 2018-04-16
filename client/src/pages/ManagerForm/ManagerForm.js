import React, { Component } from 'react';
import WizardForm from "../../components/ManagerForm/WizardForm"
import { Provider } from "react-redux";
import store from "../../components/ManagerForm/store";
import API from "../../utils/API";
import testapartment from './testapartment.json';
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBLqqQUio_x0z2rWW6YuuDN2Vx-LaAJYks'
});


class ManagerForm extends Component {

  handleFormSubmit = values => {
    console.log(testapartment.apartmentData)
    const address = testapartment.apartmentData.address.street1 + " " + testapartment.apartmentData.address.city + " " + testapartment.apartmentData.address.state
    this.geocodeAddress(address)
    console.log(address);
  }

  geocodeAddress = address => {
    googleMapsClient.geocode({
      address: address
    }, function(err, response) {
      if (!err) {
        console.log(response)
        const coords = response.json.results[0].geometry.location;
        testapartment.apartmentData["lat"] = coords.lat;
        testapartment.apartmentData["long"] = coords.lng;
        console.log(testapartment.apartmentData);
        // saves apartment with lat/long values added
        API.saveApartment(testapartment)
      }
    })
  }


  render() {
    return (
        <Provider store={store}>
          <WizardForm onSubmit= {this.handleFormSubmit} />
        </Provider>
    );
  }
}

export default ManagerForm;
