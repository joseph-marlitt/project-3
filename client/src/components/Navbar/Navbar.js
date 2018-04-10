import React from "react";
import "./Navbar.css"
import logo from "./roost.png"
const Navbar = () => 
         <ul className= "navbar">
                    <li className="title"><h2>Roost</h2></li>
                    <li className="roostIcon"><img className="roostImage" src={logo} alt={"logo"}/></li>
                    <li ><button className="navButton">New Form</button></li>
                    <li ><button className="navButton">About Us</button></li>
                    <li ><button className="navButton">Learn More</button></li>
                    <li ><button className="navButton">Log In</button></li>
                </ul>;
export default Navbar