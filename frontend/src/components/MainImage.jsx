import '../styles/MixedProject.css'

const MainImage = (props) => {
    const image = "../../src/assets/main-image-"
    let name = props.project;
    const dotjpg = ".jpg"

    let main_image = image+name+dotjpg;

    return (
        <div>
        <div className="main-image">
            <img src={main_image} height='260' width='756'/>
        </div>
        </div>
    )
}

export default MainImage;
