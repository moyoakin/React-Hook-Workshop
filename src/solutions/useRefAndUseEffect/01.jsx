// useRef and useEffect: DOM interaction

import React from 'react';
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt';

import { WorkShopNote } from '../../reusables/workshop-note'
import file from '../../exercise/useRefAndUseEffect/01.md'


function Tilt({ children }) {

    const tiltRef = React.useRef()

    React.useEffect(() => {
        const tiltNode = tiltRef.current
        VanillaTilt.init(tiltNode, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        })
        return function cleanUp(){
            tiltNode.vanillaTilt.destroy();
        }
    },[])

    return (
        <div ref={tiltRef} className="tilt-root">
            <div className="tilt-child">{children}</div>
        </div>
    )
}



function App() {
    return (
        <div className="grid-container">
            <WorkShopNote file={file} />
            <Tilt>
                <div className="totally-centered">vanilla-tilt.js</div>
            </Tilt>
        </div>

    )
}

export default App



