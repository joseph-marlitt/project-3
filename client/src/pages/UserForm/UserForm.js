import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
import showResults from "../../components/UserForm/showResults";
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";


class UserForm extends Component {

  // handleFormSubmit = (event, values) => {
  //   event.preventDefault();
  //   console.log(values);
  //   API.saveRenter({
  //
  //   })
  // }

  render() {

    return (
        <Provider store={store}>
          <WizardForm OnSubmit={showResults} />
        </Provider>
    );
  }
}

export default UserForm;
