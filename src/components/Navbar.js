import React from "react"
import reactLogo from "../images/logo.png"
export default function Navbar()
{
    return (
    
        <nav>
            <img src={reactLogo} className="nav--logo"/>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}