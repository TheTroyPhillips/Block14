import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';


export default function App() {
  const [posts, setPosts] = useState("");

  useEffect(()=> {
    axios.get
  }, []);
  

  return (
    <div>APP</div>
  );
}


/*
fetch data from api and display it in our app component

1. import useEffect into appjsx
2. create a state variabel called "posts" with the useState hook.
this will hold an array of data (what sohlud the default value be?)
3. call useEffect adter your state variable declaration and give it
an empty callback function We only want to get the data when the
component mounts.
4. install axions in your project (npm install axios)
5. at the top of the app.jsx import axios from axios
6. in your useEffect callback function you should use axios to make
the request to the endpoint
7. log the result of the axios request to ensure youre getting the data
8. set posts state variable to the data received from the api
9. use map to display the data(the todo title)
*/