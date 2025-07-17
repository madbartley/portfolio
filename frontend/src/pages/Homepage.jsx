import '../styles/Homepage.css'
import Title from '../components/Title.jsx'
import { useEffect, useRef } from 'react';

function Homepage() {

    // empty array for image names - we're going to use this to perform mapping, below
    const images = [];

    // create the array of image names as strings
    for(let i = 0; i < 30; i++) {
        let image = "../src/assets/homepage/hp-"
        let second = i+1;
        let dotjpg = ".jpg"
        images[i] = image.concat(second, dotjpg)
    }


    // assigning myRefs to be an array 
    const myRefs = useRef([]);


    // flag to signal going up (true), and down (false)
    var flag = true;
    // image to be flipped
    var picNum = Math.floor(Math.random() * (30));
    startflipper(1, flag, picNum);


    // need a function to flip the card over: 1 over something getting bigger 
    // function to replace card and flip the other way: 1 over that something going backwards to being 1

    function startflipper(i, flag, picNum) {


        if(i > 1 && flag == false) {
            i--;
        } else if (i < 10 && flag == true) {
            i++;
        }

        if(i == 10) {
            flag = false;
            Math.trunc(picNum = Math.floor(Math.random() * (30)));
        } else if(i == 1) {
            flag = true;
        }


        requestAnimationFrame( function () {

            myRefs.current[picNum].style.transform = `scaleX(${1/((0.2*((i-1)*(i-1))+1))})`;
            console.log("Images are flipping");
            startflipper(i, flag, picNum);
        });

    }


    // loop through and get every image using const currentImage = getElementById("hp"+i) (use mod so that it will wrap and you can grab every image without going in order, so like i + 3 every iteration - use i % 29, i + 16)
    // every so often, transform the width of hp+i in 500ms, then swap the image using document.getElementById("myImg").src = "new.jpg"

    return (
        
        <div className="image-container">
            <Title name={"Madeline"}/>
            <div className="flex-hp-images-container">

            {/* Switched the id to be on the image itself, not the container */}
            {/* Here, ref is the element (picture) that will be selected from the myRefs array - assigning it as "ref" means we can avoid the "null" issue of the code running before the component renders. Here, myRef is being populated with the images */}
            {/* Each image string in the images array is mapped to the index values, so that calling the the third index gives you the name of the 3rd picture */}
            {images.map((image, index) => <div className="flex-hp-image" ref={(element) => (myRefs.current[index] = element)} key={index}><img  id={"hp"+index} src={images[index]} width="150px" height="225"></img></div>)} 

            </div> 
        </div>
    )
}

export default Homepage;