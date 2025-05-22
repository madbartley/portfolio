

const currentImage = document.getElementById("tester");

//var i = 1;
//startflipper(i);

document.onload = function startflipper(i) {

    if(i > 10) {
        i = 1;
    }


    requestAnimationFrame( function () {

            currentImage.style.transform = `scaleX(${i})`;
            /*console.log(i);*/
            i++;
            startflipper(i);
        });
    }


