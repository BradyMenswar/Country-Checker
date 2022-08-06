import React from "react"
import CountryInfo from "../components/CountryInfo"
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import "../styles.css"

export default function CountryPage()
{
    const location = useLocation();
    const navigate = useNavigate();
    const info = location.state;

    function handleClick() {
		navigate("/");
	}
    return (
        <div className="container--main">
            <button onClick={handleClick} className="backButton">&lt;</button>
            <CountryInfo code={info}/>
        </div>
    )
}