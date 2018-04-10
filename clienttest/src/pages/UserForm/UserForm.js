import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";


class UserForm extends Component {
  render() {
    return (
        <Provider store={store}>
          <WizardForm OnSubmit= {this.OnSubmit} />
        </Provider>
    );
  }
}

export default UserForm;
