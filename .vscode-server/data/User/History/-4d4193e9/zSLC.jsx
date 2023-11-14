import React from 'react';
import { useState, useEffect } from 'react';
import { dummyContacts } from './ContactList';

export default function SelectedContact ({ selectedContactId, setSelectedContactId }){
   const [contact, setContact] = useState(null)