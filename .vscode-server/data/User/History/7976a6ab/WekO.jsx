import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const {featPupId, setFeatPupId} = useState(null);
  console.log(puppies);

  return(
     <div>
      {puppies.map((puppy)=> (
        <p
         onClick={()=> {
          setFeatPupId(puppy.id);
        console.log(`the feathured puppy is now ${puppy.name}`);
        console.log(featPupId);
      }}
       key={puppy.id}
       >
        {puppy.name}</p>
      ))}
    </div>
  ); 
}

export default App;
