import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import UserForm from "./pages/UserForm/UserForm.js"
import ManagerForm from "./pages/ManagerForm/ManagerForm.js"
import AboutUs from "./pages/AboutUs/AboutUs.js"
import Home from "./pages/Home/Home.js"


const App = () => (
  <Router>
    <div>
      
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/userform" component={UserForm} />
        <Route exact path="/managerform" component={ManagerForm} />
        <Route exact path="/about" component={AboutUs} />
      </Wrapper>
    </div>
  </Router>
);

export default App;
