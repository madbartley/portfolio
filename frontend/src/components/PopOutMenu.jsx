import '../styles/PopOutMenu.css'

import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';

function PopOutMenu() {
    // state for the sliding menu panel
    const [openPanel, setOpenPanel] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpenPanel(true)}>Open</button>
      </div>
      <SlidingPanel
        type={'left'}
        isOpen={openPanel}
        size={15}
      >
        <div>
          <div>My Panel Content</div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel>
    </div>
  );
}

export default PopOutMenu;