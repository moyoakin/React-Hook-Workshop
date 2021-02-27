import React from 'react';
import file from './01.md';

import { WorkShopNote  } from "../../reusables/workshop-note";

/**
 * 
 */
function Greeting({initialName = " " }){
    
    const [greet, setGreet] = React.useState(initialName);

    function handleGreeting(event){
        setGreet(event.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="input">Enter your name:</label>
                <input onChange={handleGreeting} type="text" placeholder="Enter Name" value={greet} /> 
                {greet ? <p> Hello {greet}</p> : 
                "Please enter your name" }
            </form>
            
            

        </div>
    )
}

function App() {
    return (
        <div className="grid-container">
            <WorkShopNote file={file}/>
            <Greeting />
        </div>
    )
}

export default App