import React from "react";
import { useState, useEffect } from "react";


export default function ContactRow() { 

    return ( 
          <table>
            <thead>
              <tr>
                <th colSpan="3">Contact List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
              {
                 // Map over data here
               }
            </tbody>
          </table>
      ); 
  }