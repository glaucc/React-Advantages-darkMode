import React from "react";
import logo from './photos/logo.png';


export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="react logo"/>       
            <h3>React    Course - Project 1</h3>
        </nav>
    )   
}