import React from "react";
// import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => (
  <div className="homeContainer">
    <div className="buttonContainer">
      <a
        className="homeButton"
        type='button'
        href= {"/userform"}
      >
        Renters
      </a>
      <a
        className="homeButton"
        type='button'
        href={"/managerform"}
      >
        Managers
        </a>
      </div>
    </div>
  )

export default Home
