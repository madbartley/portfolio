import '../styles/MixedProject.css'

const Description = (props) => {

    return (
        <div>
        <div id="project-title">{props.project}</div><div id="description">This is where I will write about my project!</div>
        </div>
    )
}

export default Description;