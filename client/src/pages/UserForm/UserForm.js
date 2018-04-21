import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
import { Redirect } from 'react-router'
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
      fireRedirect: false,
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
    this.setState({fireRedirect: true})
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
    // const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state.fireRedirect
    return (
      <div>
        <Provider store={store}>
          <WizardForm onSubmit={this.handleFormSubmit} />
        </Provider>

          {fireRedirect && (
            <Redirect to={'/loadingpage'}/>
          )}
        </div>

    )
  }
}


export default UserForm;
