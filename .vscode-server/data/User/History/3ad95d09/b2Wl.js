const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2308-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const res = await fetch(`${APIURL}/players`);
        const playerPuppies = await res.json();
        puppies = playerPuppies.data.players;
        console.log(puppies);
        return puppies;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        let puppySingle = [];
        const res = await fetch(`${APIURL}/players/${playerId}`)
        const playerSingle = res.json();
        puppySingle = playerSingle.data.player;
        console.log(puppySingle);
        return puppySingle;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const res = await fetch(`${APIURL}/players`, {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
            },
            body: JSON.stringify(playerObj),
        });
         window.location.reload();
        const newPlayer = await res.json();
        return newPlayer;
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {
        const res = await fetch(`${APIURL}/players/${playerId}`, {
            method: "DELETE",
        });
         window.location.reload();
        const player = await res.json();
        console.log(`Deleted ${playerId} `, player);
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {
        playerContainer.innerHTML = "";
        playerList.forEach((player) => {
        const playerElement = document.createElement("div");
        playerElement.classList.add("result");

playerElement.innerHTML = `
        <h2>${player.name}</h2>
         <p>${player.id}</p>
         <p>${player.breed}</p>
         <p>${player.status}</p>

        <button class="detailBtn" data-id="${player.id}">More Details</button>
        <button class="removeBtn" data-id="${player.id}">Remove player</button>
        `;

        playerContainer.appendChild(playerElement);

        const detailBtn = playerElement.querySelector(".detailBtn");
            detailBtn.addEventListener("click", async (e) => {
        const playerId = e.target.dataset.id;
            console.log(playerId);
    });

        const removeBtn = playerElement.querySelector(".removeBtn");
            removeBtn.addEventListener("click", async (e) => {
        const playerId = e.target.dataset.id;
            removePlayer(playerId);
    });
  });
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        const form = 
        `<form class="newPlayerEntry">
        <div id="playerName">
        <label for="name">Enter player's name: </label>
        <input type="text" name="name" id="name"/> 
        </div>
        <div id="playerBreed">
        <label for="breed">Enter player's breed: </label>
        <input type="text" name="breed" id="breed"/>
        </div>
        <div id="playerPosition">
        <label for="position">Enter player's position: </label>
        <input type="text" name="position" id="position"/>
        </div>
        <div id="formBttn">
        <input type="button" value="Add Player" id="submit"/>
        </div>
        </div>
        </form>`;
        newPlayerFormContainer.innerHTML = form;
        const submit = document.getElementById("submit");
        submit.addEventListener("click", async () => {
          const newPlayer = {
            name: document.getElementById("name").value,
            breed: document.getElementById("breed").value,
            position: document.getElementById("position").value,
        };
        addNewPlayer(newPlayer);
        console.log(newPlayer);
    });
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();