import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => (
  <div className="homeContainer">
    <div className="buttonContainer">
      <button
        className="homeButton"
        type='button'
        onClick= {<Link to="/userform">← Users</Link>}
      >
        Renters
      </button>
      <button
        className="homeButton"
        type='button'
        onClick={<Link to="/">← Managers</Link>}
      >
        Managers
        </button>
      </div>
      <p className= "logInHome">Already filled out a form? Log in <Link to="/"> Here</Link></p>
    </div>
  )

export default Home