// useRef and useEffect: DOM interaction

import React from 'react';
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt';

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'


function Tilt({children}){

    // 🐨 create a ref here with React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`.

  // 🐨 add the `ref` prop to the `tilt-root` div here:

    return (
        <div className="tilt-root">
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



