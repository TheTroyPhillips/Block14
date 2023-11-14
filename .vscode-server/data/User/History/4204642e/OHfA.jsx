import { useState, useEffect } from 'react'
import './App.css'


export default function App() {
  

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}
