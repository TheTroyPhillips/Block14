const baseUrl = "https://fsa-puppy-bowl.herokuapp.com";
const puppyContainer = document.getElementById("puppy-container");
const newPuppyForm = document.getElementById("new-puppy-form")


async function init(){
    const players = await fetchAllPlayers();
    console.log(players);
    renderAllPlayers(players);
    

}

function renderAllPlayers(players) {
    const puppyContainer = document.querySelector("#puppy-container");
    puppyContainer.innerHTML = "";
    players.forEach((puppy)=>{
        const puppyElement = rederplayer(puppy);
        puppyContainer.append(puppyElement);
    });
}

async function fetchAllPlayers(){
    try{
        const res = await fetch(`${baseUrl}/api/2308-FTB-ET-WEB-PT/players`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}
init()