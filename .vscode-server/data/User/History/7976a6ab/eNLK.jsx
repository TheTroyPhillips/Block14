import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return <div>{puppies.map(puppy=>(
    <p>{puppy.name}</p>)}</div>
  
}

export default App;
