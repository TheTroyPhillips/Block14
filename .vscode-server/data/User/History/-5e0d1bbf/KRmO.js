const cohortName = "2308-FTB-ET-WEB-PT"
const ApiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const playersApiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;
const renderplayer1 = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/1049`;
const puppyContainer = document.getElementById("puppy-container");
const newPuppyForm = document.getElementById("new-puppy-form")


async function init(){
    const players = await fetchAllPlayers();
    console.log(players);
}

function renderplayerid(){
    try{
        const res = await fetch(`${renderplayer1}`);
        const json = await res.json();

    }catch(err){
        console.log(err);
    }
    
}

async function fetchAllPlayers(){
    try{
        const res = await fetch(`${playersApiUrl}`);
        const json = await res.json();
        return json;
    }catch(err){
        console.log(err);
    }
}
init()