import React, { Component } from 'react';
import WizardForm from "../../components/Form/WizardForm"
import { Provider } from "react-redux";
import store from "../../components/Form/store";


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
