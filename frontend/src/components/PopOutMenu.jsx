import '../styles/PopOutMenu.css'
//import 'bootstrap/dist/css/bootstrap.min.css';

// import React, { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';

function PopOutMenu() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
          <div className = "menu-container">
          <div>Profile</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Web and mobile development</Accordion.Header>
        <Accordion.Body>
          <div className = "menu-container">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Robotics and embedded systems</Accordion.Header>
        <Accordion.Body>
          <div className = "menu-container">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Data science and machine learning</Accordion.Header>
        <Accordion.Body>
          <div className = "menu-container">
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PopOutMenu;