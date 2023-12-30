import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function ColorSelector() {
    const [color, setColor] = useState("Red");

    function handleColorChange (e){
        setColor(e.target.value);
    }
    return (
        <>
            <select onChange={handleColorChange}>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select>
            <p>You have selected color: </p>
        </>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ColorSelector />);