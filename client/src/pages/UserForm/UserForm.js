import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
// import showResults from "../../components/UserForm/showResults";
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";
import testrenter from './testrenter.json';

class UserForm extends Component {
// values will be true renter object
  handleFormSubmit = values => {
    const address = testrenter.address.street1 + " " + testrenter.address.city + " " + testrenter.address.state
    this.geocodeAddress(address)
    console.log(values);
    API.saveRenter(
      // test renter - actual form object will need to match format:
      testrenter
    )
  }

  geocodeAddress = address => {
    console.log(address);
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
