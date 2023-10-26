fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((json) => {
    console.log(json);
})
.catch((err) => console.log(err))

async function getTodoList(){
    
}