import React from "react";
import { BrowserRouter as  Route } from "react-router-dom";

const Home = () => (
    <Route render={({ history}) => (
    <div className="buttonContainer">
      <button
        type='button'
        onClick={() => { history.push('/UserForm') }}
      >
        Renters
      </button>
      <button
      type='button'
      onClick={() => { history.push('/ManagerForm') }}
        >
        Managers
        </button>   
    </div>
      
    )} />
  )

export default Home