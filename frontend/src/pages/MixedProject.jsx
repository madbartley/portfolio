import '../styles/MixedProject.css'
import PopOutMenu from '../components/PopOutMenu';
import UpdatesWindow from '../components/UpdatesWindow';
import TopNav from '../components/TopNav'

import { useEffect, useRef, useState } from 'react';

function MixedProject() {
    // defining state to swap everything out when a new project is selected
    const [project, setProject] = useState(['Test'])

    // creating useRef variables, initialized to null, that will be grabbed by assigning "ref = {variable-name}" in the divs in the return section of component
    const docs = useRef(null);
    const vids = useRef(null);
    const pics = useRef(null);
    const demo = useRef(null);

    // creating useRef variables, initialized to null, that will grab the titles to see if it fixes things
    const docsElement = useRef(null);
    const vidsElement = useRef(null);
    const picsElement = useRef(null);
    const demoElement = useRef(null);

    // log statement to check that no variables are null on reload
    console.log(docs + " docs " + vids + " vids " + pics + " pics " + demo + " demo");

    // function to move the element up when user mouses over - MUST use the useEffect hook to ensure the component is mounted (ie not NULL) at the time this function is loaded
    useEffect (() => {
        docs.current.addEventListener("mouseenter", function (event) {
            console.log("HOVERING UP");
            doTheMove(docsElement);
        });
        vids.current.addEventListener("mouseenter", function (event) {
            console.log("HOVERING UP");
            doTheMove(vidsElement);
        });
        pics.current.addEventListener("mouseenter", function (event) {
            console.log("HOVERING UP");
            doTheMove(picsElement);
        });
        demo.current.addEventListener("mouseenter", function (event) {
            console.log("HOVERING UP");
            doTheMove(demoElement);
        });
    }, []);

    // function to return the element to it's original position - MUST use the useEffect hook to ensure the component is mounted (ie not NULL) at the time this function is loaded
    useEffect (() => {
        docs.current.addEventListener("mouseleave", function (event) {
            console.log("RETURNING DOWN");
            doTheMoveBack(docsElement);
        });
        vids.current.addEventListener("mouseleave", function (event) {
            console.log("HOVERING UP");
            doTheMoveBack(vidsElement);
        });
        pics.current.addEventListener("mouseleave", function (event) {
            console.log("RETURNING DOWN");
            doTheMoveBack(picsElement);
        });
        demo.current.addEventListener("mouseleave", function (event) {
            console.log("HOVERING UP");
            doTheMoveBack(demoElement);
        });
    }, []);

    // helper function to actually move the icon up
    function doTheMove(theRef) {
        theRef.current.style.top = '-100px';
    }

    // helper function to actually move the icon back
    function doTheMoveBack(theRef) {
        theRef.current.style.top = '0px';
    }


    return (
        <div className="mixed-project-container">
            <div className="menu-pop-out"><h3>left side</h3><PopOutMenu /></div>
            <div className="main-image"><h3>main image</h3></div>
            <div className="project"><div id="project-title">{project}</div><div id="description">This is where I will write about my project!</div></div>
            {/*The larger class element has a flex item inside it called docs-div that holds the actual moving stuff*/}
            {/* <div className="item-container"> */}
            <div className="docs" ref = {docs}><div id="docs-div" ref = {docsElement}><h3>docs</h3></div><div className="inner-words">View my documentation</div></div>
            <div className="vids" ref = {vids}><div id="vids-div" ref = {vidsElement}><h3>videos</h3></div><div className="inner-words">Browse videos related to this project</div></div>
            <div className="pics" ref = {pics}><div id="pics-div" ref = {picsElement}><h3>pictures</h3></div><div className="inner-words">View my photo album</div></div>
            <div className="demo" ref = {demo}><div id="demo-div" ref = {demoElement}><h3>demo</h3></div><div className="inner-words">Demo this project</div></div>
            {/* </div> */}
            <div className="updates"><h3>{project} updates</h3><UpdatesWindow /></div>
            <div className="heading"><h3><TopNav /></h3></div>
            <div className="r-side"><h3>r-side</h3></div>
            <div className="blank"><h3>blank</h3></div>
        </div>
    )
    
}

export default MixedProject;