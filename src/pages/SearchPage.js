import React from "react"
import SearchBar from "../components/SearchBar"
import logo from "../images/globe.png"
import "../styles.css"

export default function SearchPage()
{
    return (
        <div className="container--main">
            <SearchBar />
            <img src={logo}></img>
        </div>
    )
}