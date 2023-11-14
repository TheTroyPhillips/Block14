import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null) 

  return (
    <>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
