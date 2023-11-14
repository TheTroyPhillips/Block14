import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList'
import { dummyContacts } from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  

  return (
    {selectedContactId  (
      <div>Selected Contact View</div>
    ) : (
    <ContactList/>
  )}
  );
}

export default App
