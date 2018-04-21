import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
// import showResults from "../../components/UserForm/showResults";
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";
// import testrenter from './testrenter.json';
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBLqqQUio_x0z2rWW6YuuDN2Vx-LaAJYks'
});

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId
    };
  }

// values will be true renter object
  handleFormSubmit = values => {
    // add currently logged in userId to current form
    values.userId = this.state.userId;
    const address = values.address.street1 + " " + values.address.city + " " + values.address.state
    if (values["pets"] === "Yes") {
      values["pets"] = true;
    } else {
      values["pets"] = false;
    }
    this.geocodeAddress(values, address)
    console.log(values);
    // console.log(testrenter)
  }

  geocodeAddress = (values, address) => {
    googleMapsClient.geocode({
      address: address
    }, function(err, response) {
      if (!err) {
        const coords = response.json.results[0].geometry.location;
        values["lat"] = coords.lat;
        values["long"] = coords.lng;
        console.log(values);
        // saves renter with lat/long values added
        API.saveRenter(values)
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
