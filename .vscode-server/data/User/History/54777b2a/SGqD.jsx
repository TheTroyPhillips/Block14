import React from "react";
import { useState, useEffect } from "react";


export default function ContactRow({contact}) { 

    return ( 
        <tr>
            <td>{contact.name}</td>
            <td>Email</td>
            <td>Phone</td>
        </tr>
              
      ); 
  }