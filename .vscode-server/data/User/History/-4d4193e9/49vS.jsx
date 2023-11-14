import React from 'react';
import { useState, useEffect } from 'react';

export default function SelectedContact ({ selectedContactId, setSelectedContactId }){
   const [contact, setContact] = useState(null)

   useEffect(()=> {
    async function fetchContacts() {
        try{
            const res = await fetch(
                "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );
                const result = await res.json();
                setContacts(result);
        } catch(err) {
            console.error(err);
        }
    }
    fetchContacts()
},[])
}