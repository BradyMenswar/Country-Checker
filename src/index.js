import React from "react"
import ReactDOM from "react-dom"
import {HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import {createRoot} from 'react-dom/client'
import SearchPage from "./pages/SearchPage"
import Navbar from "./components/Navbar"
import CountryPage from "./pages/CountryPage"
import "./styles.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route index element={<SearchPage />} />
            <Route path="country" element={<CountryPage />} />
        </Routes>
    </BrowserRouter>
)