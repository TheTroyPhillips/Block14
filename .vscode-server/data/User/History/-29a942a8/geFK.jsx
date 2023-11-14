import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList'
import { dummyContacts } from './components/ContactList'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  

  return (
    <ContactList/>
  );
}

export default App
