import React, { Component } from 'react';
import WizardForm from "../../components/ManagerForm/WizardForm"
import { Provider } from "react-redux";
import store from "../../components/ManagerForm/store";


class ManagerForm extends Component {
  render() {
    return (
        <Provider store={store}>
          <WizardForm OnSubmit= {this.OnSubmit} />
        </Provider>
    );
  }
}

export default ManagerForm;