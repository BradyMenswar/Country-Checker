import React from "react"
import { Link } from "react-router-dom"
import reactLogo from "../images/logo.png"
import classes from "./Navbar.module.css"
export default function Navbar()
{
    return (
    
        <nav>
            <Link className={classes.title} to="/">Country Checker</Link>
        </nav>
    )
}