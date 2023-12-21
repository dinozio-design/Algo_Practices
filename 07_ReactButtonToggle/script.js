import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
    const [btnOn, setBtnOn] = useState(true);
  function handleClick() {
    if(!btnOn){
        setBtnOn(true);
    } else {
        setBtnOn(false);
    };
  }
  
  return (
    <button onClick={handleClick}>{btnOn ? "ON" : "OFF"}</button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);