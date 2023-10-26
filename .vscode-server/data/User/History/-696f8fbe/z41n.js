console.log('first');
fetch("https://jsonplaceholder.typeicode.com/posts")
.then((res) => res.json())
.then((json) => {
    console.log("second");
    console.log(json);
})
.catch((err) => console.log(err))
console.log('third')