import '../styles/Home.css'
import TopNav from '../components/TopNav'
import { useEffect, useRef } from 'react';
import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Home() {

    function doColor() {
        const elem=document.getElementById("decor");
        elem.style.backgroundColor="#10616dff";
        elem.style.color="#1aa784";
    }

    function revertColor() {
        const elem=document.getElementById("decor");
        elem.style.backgroundColor="#023c45";
        elem.style.color="#20E1B1";
    }
    
return (
        
        <div className="home-container">
            <div className = "top-blank"><TopNav /></div>
            <div className = "left"></div>
            <div className = "top-scroll"><h3 id = "tagline">- web and mobile development - embedded systems - data science and machine learning - web and mobile development - embedded systems - data science and machine learning - web and mobile development - embedded systems - data science and machine learning </h3></div>
            <div className = "main-image"><div className = "welcome"></div></div>
            <Link to="/projects" id="decor"><div onMouseDown={doColor} onMouseUp={revertColor}>
                <div className = "featured"><img src="/arrow.svg" width='35px'></img> get started</div>
            </div></Link>
            <div className = "bottom-scroll"><h1 id = "title">- Madeline Bartley - Madeline Bartley - Madeline Bartley</h1></div>
            <div className = "right"></div>
            <div className = "lower"></div>
        </div>
    )
}

export default Home;