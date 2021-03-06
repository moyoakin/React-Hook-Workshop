// useEffect: persistent state

import React from 'react'

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

const useLocalStorageState = (key,defaultValue = "", {serialize = JSON.stringify, deSerialize = JSON.parse} = {} ) => {
  
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue 
  )

  // UseEffect takes a callback fn
 React.useEffect(() => {
   window.localStorage.setItem(key, state);
 },[key, state])

 return [state, setState];
}


function Greeting({initialName = ''}) {
  const [name,setName] = useLocalStorageState('name', initialName);
  
  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return (
    <div className="grid-container">
        <WorkShopNote file={file} />
         <Greeting />
    </div>
   
  )
}

export default App