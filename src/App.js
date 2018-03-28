import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import WizardForm from "./components/Form/WizardForm"
import { Provider } from "react-redux";
import store from "./components/Form/store";




class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Provider store={store}>
          <WizardForm />
        </Provider>
      </Wrapper>
    );
  }
}

export default App;
