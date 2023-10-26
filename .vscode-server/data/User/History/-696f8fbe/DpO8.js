fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((json) => {
    console.log(json);
})
.catch((err) => console.log(err))

async function getTodoList(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (res.status === 404){
            throw new Error("404: Resource not found");
        }
        console.log(res);
        const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}

posts.forEach((post) => {
const newHeading = document.createElement("h2");
const newParagraph = document.createElement("p");
newHeading.innerText = post.title;
newParagraph.innerText = post.body;
postsContainer.appendChild(newHeading);
postsContainer.appendChild(newParagraph);
});