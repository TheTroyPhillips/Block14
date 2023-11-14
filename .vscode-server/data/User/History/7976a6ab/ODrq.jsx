import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const {featPupId, setFeatPupId} = useState(null);

  function handleClick()

  return(
     <div>
      {puppies.map((puppy)=> (
        <p
         onClick={()=> {
      }}
       key={puppy.id}
       >
        {puppy.name}</p>
      ))}
    </div>
  ); 
}

export default App;
