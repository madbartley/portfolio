import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Home.css'


const TopNav = () => {
    
    return (
        <Navbar className = "nav" data-bs-theme="dark">
          <Container><div id="madeline-logo"><img src='/mb-logo.svg' height='40'/><div id="madeline-email"> madeline.bartley@outlook.com</div></div></Container>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link to="/projects">Profile</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/madeline-bartley/">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/madbartley">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default TopNav;