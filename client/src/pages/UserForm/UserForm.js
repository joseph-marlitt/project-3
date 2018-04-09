import React, { Component } from 'react';
import WizardForm from "../../components/UserForm/WizardForm"
// import showResults from "../../components/UserForm/showResults";
import { Provider } from "react-redux";
import store from "../../components/UserForm/store";
import API from "../../utils/API";


class UserForm extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/renters');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleFormSubmit = values => {
    console.log(values);
    API.saveRenter({
      firstName: values.firstName
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
