import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import SlidingPanelContent from "../components/SlidingPanelContent"
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../styles/MixedProject.css";

const SlideUp = (props) => {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  return (
    <div>
      <div className="slider-button" onClick={() => setState({ isPaneOpen: true })}>
        {props.title}
      </div>

      <SlidingPane 
        closeIcon={<div id="closer">Close</div>}
        isOpen={state.isPaneOpen}
        title={<div id="panel-title">{props.poptype + " for: " + props.project}</div>}
        from="bottom"
        width="800px"
        onRequestClose={() => setState({ isPaneOpen: false })} >

        <div className="modal-content-container"><SlidingPanelContent poptype = {props.poptype} /></div>
      </SlidingPane>
      
    </div>
  );
};

export default SlideUp;