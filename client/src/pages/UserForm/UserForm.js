import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
// import showResults from "../../components/UserForm/showResults";
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";
import testrenter from './testrenter.json';
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBLqqQUio_x0z2rWW6YuuDN2Vx-LaAJYks'
});

class UserForm extends Component {
// values will be true renter object
  handleFormSubmit = values => {
    const address = testrenter.address.street1 + " " + testrenter.address.city + " " + testrenter.address.state
    this.geocodeAddress(address)
    console.log(values);
  }

  geocodeAddress = address => {
    googleMapsClient.geocode({
      address: address
    }, function(err, response) {
      if (!err) {
        const coords = response.json.results[0].geometry.location;
        testrenter["lat"] = coords.lat;
        testrenter["long"] = coords.lng;
        testrenter["firstName"] = "Testington";
        console.log(testrenter);
        // saves renter with lat/long values added
        API.saveRenter(testrenter)
      }
    })
  }

  render() {
    return (
        <Provider store={store}>
          <WizardForm onSubmit={this.handleFormSubmit} />
        </Provider>
    );
  }
}


export default UserForm;
