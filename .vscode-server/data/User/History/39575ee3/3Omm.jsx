

function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }

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
