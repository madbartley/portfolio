import '../styles/MixedProject.css'
import Descriptions from '../Descriptions.jsx';

const ReadMeText = (props) => {

    let project_descr = props.project;
    console.log("Description: ", project_descr);
    console.log("Props.project: ", props.project);
    console.log("From JSON: ", Descriptions.Project);

    props.project === "Profile" ? project_descr = Descriptions.Profile
    : (props.project === "Portfolio website") ? project_descr = Descriptions.Portfolio
    : (props.project === "Low Pressure mobile app") ? project_descr = Descriptions.Mobile
    : (props.project === "Coming soon - robotics") ? project_descr = Descriptions.Robotics
    : (props.project === "Coming soon - data science and ML") ? project_descr = Descriptions.Dsml
    : project_descr = "No project description yet."

    return (
        <div className="inner-description">
        <div id="project-title">README</div><div id="description">{project_descr}</div>
        </div>
    )
}

export default ReadMeText;