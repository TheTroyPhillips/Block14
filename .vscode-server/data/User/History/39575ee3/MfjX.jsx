

function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }


  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="post-title">Post Title</label>
        <input type="text" id="post-title" onChange={(e)=>setPostTitle(e.target.value)}/>
        <label htmlFor="post-body">Post Body</label>
        <input type="text" id="post-body" onChange={(e)=>setPostBody(e.target.value)}/>
        <button>Submit</button>
    </form>
    <p>Post Title {postTitle}</p>
    <p>Post Body {postTitle}</p>
    </>
  );
  
}

export default App
