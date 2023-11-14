import { useState } from "react";


function App() {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [newPost, setNewPost] = useState(null);

  
  function handleSubmit(e) {
    e.preventDefault();
    const payload = JSON.stringify({
      userId: 11,
      body: postBody,
      title: postTitle,
    });
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    body: payload,
    headers: { "Content-type": "application/json; charset=UTF-8"},
  })
  .then((res)=> res.json())
  .then((json)=> {
    console.log(json);
    setNewPost(json);
  })
  .catch((err)=> console.log(err));
 
}


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="post-title">Post Title</label>
        <input type="text" id="post-title" onChange={(e)=>setPostTitle(e.target.value)}/>
        <label htmlFor="post-body">Post Body</label>
        <input type="text" id="post-body" onChange={(e)=>setPostBody(e.target.value)}/>
        <button>Submit</button>
    </form>
    {newPost && {
      <div>
      <p>{newPost?.title}</p>
      <p>{newPost.body}</p>
      </div>
    }}
    </>
  );

  
}

export default App
