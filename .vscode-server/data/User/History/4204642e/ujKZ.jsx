import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useEffect } from 'react'

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
  });

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}
