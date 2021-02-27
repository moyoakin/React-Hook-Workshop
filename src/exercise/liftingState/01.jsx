// Lifting state

import React from 'react'

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

/**
 * Write functionality to display user input
 */
function UserInputDisplay(){
    // 💣 remove this code 
    return <div><p>Put your code here</p></div>
}

function App(){
    return(
        <div className="grid-container">
        <WorkShopNote file={file} />
        <UserInputDisplay />
    </div>
    ) 
    
}

export default App