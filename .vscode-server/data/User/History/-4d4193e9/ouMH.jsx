import React from 'react';
import { useState, useEffect } from 'react';

export default function SelectedContact ({ selectedContactId, setSelectedContactId }){
   const [contact, setContact] = useState(null)

   useEffect(()=> {
    async function fetchContact() {
        try{
            const res = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await res.json();
                setContact(result);
        } catch(err) {
            console.error(err);
        }
    }
    fetchContact()
},[]);

useEffect(() => {
    console.log(contact)
    }, [contact]);

    return(
        <>
        {
            contact ? (
                <div>  
                    <h1>{contact.name}</h1>
                    <h1>Email: {contact.email}</h1>
                    <h1>Phone #: {contact.phone}</h1>
                    <h1>Username: {contact.username}</h1>
                    <h1>Website: {contact.website}</h1>
                </div>  
            )
        }
        </>
    
}