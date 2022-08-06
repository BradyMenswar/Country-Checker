import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage"
import CountryPage from "./pages/CountryPage"

export default function App()
{
    return(
        <div className="container">
        <Navbar />

        </div>
    )
}