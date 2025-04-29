import '../styles/Homepage.css'

function Homepage() {

    const images = [];


    for(let i = 0; i < 30; i++) {
        let image = "../src/assets/homepage/hp-"
        let second = i+1;
        let dotjpg = ".jpg"
        images[i] = image.concat(second, dotjpg)
    }



    return (
        <div className="image-container">
            <div className="flex-hp-images-container">
                
            {images.map((image, index) => <div className="flex-hp-image" key={index}><img src={images[index]} width="150px" height="225"></img></div>)}

            </div>
        </div>
    )
}

export default Homepage;