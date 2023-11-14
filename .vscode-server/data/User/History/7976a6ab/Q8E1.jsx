import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  return (
     <div>
      <p>{featPupId &&}</p>
      {puppies.map((puppy) => (
        <p
         onClick={()=> {
          setFeatPupId(puppy.id);
      }}
       key={puppy.id}
       >
        {puppy.name}
        </p>
      ))}
    </div>
  ); 
}

export default App;
