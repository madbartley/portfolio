import '../styles/Homepage.css'
import { useEffect, useRef } from 'react';

function Homepage() {

    const images = [];


    for(let i = 0; i < 30; i++) {
        let image = "../src/assets/homepage/hp-"
        let second = i+1;
        let dotjpg = ".jpg"
        images[i] = image.concat(second, dotjpg)
    }

    //const currentImage = document.getElementById("tester");

    const currImgRef = useRef(null);
    const flipImageRef = useRef(null);

    const myRefs = useRef([]);

    /*const myRefs = [];

    for(let i = 0; i < 30; i++) {
        const tempRef = useRef(null);
        myRefs[i] = tempRef;
    }*/


    startflipper(1);

    useEffect (() => {
        startflipper(1);
        if(flipImageRef == null) {
            console.log("HE'S NULLLLLLLLL");
        } else {
            console.log("hes NOTTTTT NULL");
        }
    });


    function startflipper(i) {

        if(i > 10) {
            i = 1;
        }


        requestAnimationFrame( function () {

            myRefs.current[15].style.transform = `scaleX(${1/(i)})`;
            console.log("FIFTEEEEEEN");
            i++;
            startflipper(i);
        });

    }

    


    // loop through and get every image using const currentImage = getElementById("hp"+i) (use mod so that it will wrap and you can grab every image without going in order, so like i + 3 every iteration - use i % 29, i + 16)
    // every so often, transform the width of hp+i in 500ms, then swap the image using document.getElementById("myImg").src = "new.jpg"

    return (
        
        <div className="image-container">
            <h1 id="tester" ref={currImgRef}>TESTING FLIP</h1>
            <div className="flex-hp-images-container">

            {/* Switched the id to be on the image itself, not the container */}  
            {images.map((image, index) => <div className="flex-hp-image" ref={(el) => (myRefs.current[index] = el)} key={index}><img  id={"hp"+index} src={images[index]} width="150px" height="225"></img></div>)} 

            </div> 
        </div>
    )
}

export default Homepage;