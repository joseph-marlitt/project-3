import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
      </Wrapper>
    );
  }
}

export default App;
