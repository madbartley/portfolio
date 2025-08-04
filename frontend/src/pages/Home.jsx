import '../styles/Home.css'
import PopOutMenu from '../components/PopOutMenu.jsx'
import TopNav from '../components/TopNav'
import { useEffect, useRef } from 'react';
import { useState, createContext, useContext } from "react";


function Home() {
    
return (
        
        <div className="home-container">
            <div className = "top-blank"><TopNav /></div>
            <div className = "left"></div>
            <div className = "top-scroll"><h3 id = "tagline">- web and mobile development - embedded systems - data science and machine learning - web and mobile development - embedded systems - data science and machine learning - web and mobile development - embedded systems - data science and machine learning </h3></div>
            <div className = "main-image"><div className = "welcome"></div></div>
            <div className = "bottom-scroll"><h1 id = "title">- Madeline Bartley - Madeline Bartley - Madeline Bartley</h1></div>
            <div className = "right"></div>
            <div className = "lower"></div>
        </div>
    )
}

export default Home;