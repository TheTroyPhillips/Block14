

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
        <input type="text" id="post-title"/>
        <label htmlFor="post-body">Post Body</label>
        <input type="text" id="post-body"/>
        <button>Submit</button>
    </form>
    </>
  );
  
}

export default App
