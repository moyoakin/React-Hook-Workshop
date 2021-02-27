//Lifting state 

import React, { useState } from 'react';

function Name({name, onNameChange}) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} onChange={onNameChange} />
        </div>
    )
}

function FavoriteAnimal(){

    // 💣 we will delete this eventually, 
    //it's will be managed by the App
    const [animal, setAnimal ] = useState('')
    
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={event => setAnimal(event.target.value)}
            />
        </div>
    )
}

function Display({name}){
    return <div>{`Hey ${name}, you are great!`}</div>
}

function App() {
    const [name, setName] = useState('')
    return (
        <form>
            <Name name={name} onNameChange={event => setName(event.target.value)} />
            <FavoriteAnimal />
            <Display name={name} />
        </form>
    )
}

export default App