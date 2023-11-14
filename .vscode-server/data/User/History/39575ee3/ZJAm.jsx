

function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="post-title">Post Title</label>
        <form type="text" id="post-title"></form>
        <label htmlFor="post-body">Post Body</label>
        <form type="text" id="post-body"></form>
        <button>Submit</button>
    </form>
    </>
  )
  
}

export default App
