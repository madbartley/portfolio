import '../styles/MixedProject.css'

import { useEffect, useRef } from 'react';

function MixedProject() {

    // creating useRef variables, initialized to null, that will be grabbed by assigning "ref = {variable-name}" in the divs in the return section of component
    const docs = useRef(null);
    const vids = useRef(null);
    const pics = useRef(null);
    const journals = useRef(null);

    // creating useRef variables, initialized to null, that will grab the titles to see if it fixes things
    const docsElement = useRef(null);
    const vidsElement = useRef(null);
    const picsElement = useRef(null);
    const journalsElement = useRef(null);

    // log statement to check that no variables are null on reload
    console.log(docs + " docs " + vids + " vids " + pics + " pics " + journals + " journals");

    // function to move the element up when user mouses over - MUST use the useEffect hook to ensure the component is mounted (ie not NULL) at the time this function is loaded
    useEffect (() => {
        docs.current.addEventListener("mouseenter", function () {
            console.log("HOVERING UP");
            docsElement.current.style.top = '-100px';
        });
    }, []);

    // function to return the element to it's original position - MUST use the useEffect hook to ensure the component is mounted (ie not NULL) at the time this function is loaded
    useEffect (() => {
        docs.current.addEventListener("mouseleave", function () {
            console.log("RETURNING DOWN");
            docsElement.current.style.top = '0px';
        });
    }, []);



    return (
        <div className="mixed-project-container">
            <div className="menu-pop-out"><h3>menu pop out</h3></div>
            <div className="main-image"><h3>main image</h3></div>
            {/*The larger class element has a flex item inside it called docs-div that holds the actual moving stuff*/}
            {/* <div className="item-container"> */}
            <div className="docs" ref = {docs}><div id="docs-div" ref = {docsElement}><h3>docs</h3></div></div>
            <div className="vids" ref = {vids}><div id="vids-div" ref = {vidsElement}><h3>videos</h3></div></div>
            <div className="pics" ref = {pics}><div id="pics-div" ref = {picsElement}><h3>pictures</h3></div></div>
            <div className="journals" ref = {journals}><div id="journals-div" ref = {journalsElement}><h3>journals</h3></div></div>
            {/* </div> */}
            <div className="updates"><h3>updates</h3></div>
            <div className="heading"><h3>heading</h3></div>
            <div className="r-side"><h3>r-side</h3></div>
            <div className="blank"><h3>blank</h3></div>
        </div>
    )
    
}

export default MixedProject;