import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppyList);
  return <>App </>
  
}

export default App;
