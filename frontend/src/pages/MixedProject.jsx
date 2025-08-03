import '../styles/MixedProject.css'
import PopOutMenu from '../components/PopOutMenu';
import UpdatesWindow from '../components/UpdatesWindow';
import TopNav from '../components/TopNav'
import PopUps from '../components/PopUps';
import MainImage from '../components/MainImage';
import Description from '../components/Description';

import { useEffect, useRef, useState} from 'react';
import { createContext } from "react";
import ReactDOM from "react-dom/client";

const ProjectContext = createContext("Profile");

function MixedProject() {
    // defining state to swap everything out when a new project is selected
    const [project, setProject] = useState(['Test'])

    return (
        <div className="mixed-project-container">
            <ProjectContext.Provider value={project}>
            <div className="menu-pop-out"><PopOutMenu /></div>
            <div className="main-image"><MainImage /></div>
            <div className="project"><Description /></div>
            <div className="pop-ups"><PopUps /></div>
            <div className="updates"><h3>{project} updates</h3><UpdatesWindow /></div>
            <div className="heading"><h3><TopNav /></h3></div>
            <div className="r-side"><h3>r-side</h3></div>
            <div className="blank"><h3>blank</h3></div>
            </ProjectContext.Provider>
        </div>
    )
    
}

export default MixedProject;