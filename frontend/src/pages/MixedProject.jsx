import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/MixedProject.css'
import UpdatesWindow from '../components/UpdatesWindow';
import UpdatesCard from '../components/UpdatesCard';
import TopNav from '../components/TopNav'
import PopUps from '../components/PopUps';
import MainImage from '../components/MainImage';
import Description from '../components/Description';
import SlideUp from '../components/SlideUp';



import { useState,} from 'react';


function MixedProject() {
    // defining state to swap everything out when a new project is selected
    const [project, setProject] = useState('Profile');

    // set state to Profile
    function setProfile() {
        setProject("Profile");
    }

    // set state to Profile
    function setPortfolio() {
        setProject("Portfolio website");
    }

    // set state to LowPressure app
    function setLowPressure() {
        setProject("Low Pressure mobile app");
    }

    // set state to LowPressure app
    function setRobo1() {
        setProject("Coming soon");
    }

    // set state to LowPressure app
    function setML1() {
        setProject("Coming soon");
    }

    return (
        <div className="mixed-project-container">
            <div className="menu-pop-out">
                <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About</Accordion.Header>
                    <Accordion.Body>
                    <div className = "menu-container">
                    <div id="profile" onClick={setProfile}>Profile</div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Web and mobile development</Accordion.Header>
                    <Accordion.Body>
                    <div className = "menu-container">
                    <div id="p1" onClick={setPortfolio}>Portfolio website</div>
                    <div id="p2" onClick={setLowPressure}>Low Pressure mobile app</div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Robotics and embedded systems</Accordion.Header>
                    <Accordion.Body>
                    <div className = "menu-container">
                    <div id="p3" onClick={setRobo1}>Coming soon</div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Data science and machine learning</Accordion.Header>
                    <Accordion.Body>
                    <div className = "menu-container">
                    <div id="p4" onClick={setML1}>Coming soon</div>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
            <div className="main-title">{project}</div>
            <div className="main-image"><MainImage project = {project}/></div>
            <div className="project"><Description project = {project}/></div>
            <div className="pop-ups"><PopUps project = {project}/></div>
            <div className="updates"><div className="inner-updates"><div id="updates-title">Related updates</div><UpdatesWindow project = {project}/></div></div>
            <div className="heading"><TopNav /></div>
            <div className="r-side"></div>
            <div className="blank"></div>
            <div className="l-side"></div>
            <div className="m-side"></div>
            <div className="a-side"><SlideUp /></div>
        </div>
    )
    
}

export default MixedProject;