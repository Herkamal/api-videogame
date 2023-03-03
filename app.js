const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '29c51e0a2cmsh637231cf98d0a23p1dd7eejsne4a646944164',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
};

let gamesData = [];

async function games() {
  const gamesResponse = await fetch('https://mmo-games.p.rapidapi.com/games', options);
  gamesData = await gamesResponse.json();
  const gameListEl = document.querySelector(".game-list");
  gameListEl.innerHTML = gamesData
    .map(game => 
      `<div class="game-card">
        <img src="${game.thumbnail}" alt="">
        <div class="game-details">
          <h2>${game.title}</h2>
          <p><strong>Genre:</strong> ${game.genre}</p>
          <p><strong>Platform:</strong> ${game.platform}</p>
          <p><strong>Publisher:</strong> ${game.publisher}</p>
          <p><strong>Developer:</strong> ${game.developer}</p>
          <p><strong>Release Date:</strong> ${game.release_date}</p>
        </div>
        <a href="${game.game_url}" target="_blank" class="play-now-btn">Play Now</a>
      </div>`
    ).join("");
}

games()

function searchGames(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredGames = gamesData.filter(game => game.title.toLowerCase().includes(searchTerm));
  const gameListEl = document.querySelector(".game-list");
  gameListEl.innerHTML = filteredGames
    .map(game => 
      `<div class="game-card">
        <img src="${game.thumbnail}" alt="">
        <div class="game-details">
          <h2>${game.title}</h2>
          <p><strong>Genre:</strong> ${game.genre}</p>
          <p><strong>Platform:</strong> ${game.platform}</p>
          <p><strong>Publisher:</strong> ${game.publisher}</p>
          <p><strong>Developer:</strong> ${game.developer}</p>
          <p><strong>Release Date:</strong> ${game.release_date}</p>
        </div>
        <a href="${game.game_url}" target="_blank" class="play-now-btn">Play Now</a>
      </div>`
    ).join("");
}

const searchInput = document.querySelector("#search-bar");


searchInput.addEventListener("input", searchGames);
