import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
  function handleClick() {
    // todo
  }
  
  return (
    <button>ON</button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);