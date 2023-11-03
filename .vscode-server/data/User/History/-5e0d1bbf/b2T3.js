const cohortName = "2308-FTB-ET-WEB-PT"
const ApiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const playersApiUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;
const puppyContainer = document.getElementById("puppy-container");
const newPuppyForm = document.getElementById("new-puppy-form")


async function init(){
    const players = await fetchAllPlayers();
    console.log(players);
}


const fetchAllPlayers = async () => {
    try{
        const res = await fetch(playersApiUrl);
        const players = await res.json();
        return players.data.player;
    }catch(err){
        console.error(`trouble fetching players!`, err);
    }
}
init()