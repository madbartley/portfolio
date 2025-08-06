import '../styles/MixedProject.css'
import SlideUp from '../components/SlideUp';

import { useEffect, useRef, useState} from 'react';

const PopUps = (props) => {

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
        theRef.current.style.top = '-70px';
        theRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    // helper function to actually move the icon back
    function doTheMoveBack(theRef) {
        theRef.current.style.top = '0px';
        theRef.current.style.backgroundColor = 'rgba(2, 60, 69, 100)';
    }


    return (
        <div className="item-container">
        {/*The larger class element has a flex item inside it called docs-div that holds the actual moving stuff*/}
            <div className="docs" ref = {docs}><div id="docs-div" ref = {docsElement}><img className="icons" src="../../src/assets/popup-icons/docs.svg" height='65px'/></div><div className="inner-words"><SlideUp title={"Docs for this project"} project={props.project} poptype={"Documents"}/></div></div>
            <div className="vids" ref = {vids}><div id="vids-div" ref = {vidsElement}><img className="icons" src="../../src/assets/popup-icons/videos.svg" height='65px'/></div><div className="inner-words"><SlideUp title={"Browse related videos"} project={props.project} poptype={"Videos"}/></div></div>
            <div className="pics" ref = {pics}><div id="pics-div" ref = {picsElement}><img className="icons" src="../../src/assets/popup-icons/photos.svg" height='65px'/></div><div className="inner-words"><SlideUp title={"View photos"} project={props.project} poptype={"Photos"}/></div></div>
            <div className="demo" ref = {demo}><div id="demo-div" ref = {demoElement}><img className="icons" src="../../src/assets/popup-icons/demos.svg" height='65px'/></div><div className="inner-words"><SlideUp title={"Watch a demo"} project={props.project} poptype={"Demo"}/></div></div>
            </div>
    )
}

export default PopUps;