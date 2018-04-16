import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import UserForm from "./pages/UserForm/UserForm.js"
import Home from "./pages/Home/Home.js"
import ManagerForm from "./pages/ManagerForm/ManagerForm.js"
import ShowApartmentsTest from "./pages/ShowApartmentsTestPage/ShowApartmentsTest.js"


const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/userform" component={UserForm} />
        <Route exact path="/managerform" component={ManagerForm} />
        <Route exact path="/apartmenttest" component={ShowApartmentsTest} />
        </Switch>
      </Wrapper>
    </div>
  </Router>
);

export default App;
