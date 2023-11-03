const baseUrl = "https://fsa-async-await.herokuapp.com";
const songContainer = document.getElementById("song-container");
const newSongForm = document.getElementById("new-song-form");



async function init(){
    const songs = await fetchAllSongs();
    console.log(songs);
    renderAllSongs(songs);
    renderNewSongForm();
}

function renderAllSongs(songs){
    let htmlString = "";
    songs.forEach(song=>htmlString += `<p>${song.title}</p>`);
    songContainer.innerHTML = htmlString;
}

async function fetchAllSongs(){
    try{
        const res = await fetch(`${baseUrl}/api/guided-practice/songs`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}

async function addSong(song){
    try{
        const res = await fetch(`${baseUrl}/api-guided-practice/songs`, {
           method: "POST",
           body: JSON.stringify(song),
           headers: {
            "Content-type": "application/json",
           }, 
        });
        const json = await res.json();
        console.log(json);
    } catch(err) {}
}

function renderNewSongForm(){
    let formString = `
    <form>
    <input for='title' type='text'/>
    <label name='title' id='title'>Title</label>
    <input for='artist' type='text'/>
    <label name='artist' id='artist'>Artist</label>
    <input for='genre' type='text'/>
    <label name='genre' id='genre'>Genre</label>
    <input for='release-date' type='text'/>
    <label name='release-date' id='release-date'>Release Date</label>
    <button>Submit</button>
    </form>`
    newSongForm.innerHTML = formString;
    newSongForm.addEventListener("submit", function(e){
        e.preventDefault();
        const songToAdd = {
            artist_id:1,
            genre_id: 1,
            release_date: "1997-01-01T00:00:00.000Z",
            title: "Tirolerzeit",
        }
    });
}

init()