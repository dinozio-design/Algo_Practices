import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function LiveText() {
    const[inputText, setInputText]=useState();

    function handleInputText(e){
        setInputText(e.target.value);
    };

    return (
        <>
            <input type="text" onChange={handleInputText}/>
            <p>{inputText}</p>
        </>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<LiveText />);