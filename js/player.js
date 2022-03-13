const row = document.getElementById('row');
const searchId = document.getElementById('search');
const errorId = document.getElementById('error');
// Error 
const showError = (error) => {
    errorId.className = 'd-block text-center text-danger fw-bold fs-4';
    return errorId.className;
};
// =========Fetch Team Name==========
const team = () => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4328&s=2021-2022`)
        .then(res => res.json())
        .then(data => teamList(data.table))
}
const teamList = (teams) => {
    for (const team of teams) {
        // console.log(team, team.strTeam);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-md-6')
        div.classList.add('col-12')
        div.innerHTML = `
        <a href="#"  class="text-decoration-none text-black">
        <div class="card mb-3 border-pink" style="max-width: 540px;">
            <div class="row g-0 align-items-center">
                <div class="col-md-2">
                <img src="${team.strTeamBadge}" class="img-fluid rounded-start ms-2" alt="...">
                </div>
                <div class="col-md-10">
                <div class="card-body">
                    <h3 class="card-title fw-bold pink">${team.intRank} : ${team.strTeam}</h3>
                    <p class="card-text">${team.strLeague}</p>
                </div>
                <div class="d-flex">
                    <div class="card-body">
                        <p class="card-title fw-bold pink"> Played : ${team.intPlayed}</p>
                        <p class="card-text">Win : ${team.intWin}</p>
                    </div>
                    <div class="card-body">
                        <p class="card-title fw-bold pink"> Point : ${team.intPoints}</p>
                        <p class="card-text">Loss : ${team.intLoss}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </a>
        `
        row.appendChild(div)
    }

}

// =================Search Player===============
const searchBar = () => {
    const searchValue = searchId.value;
    // console.log(searchValue)
    if (searchValue == '') {
        errorId.className = 'd-block text-center text-danger fw-bold fs-4'

    } else {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`)
            .then(res => res.json())
            .then(data => showPlayerDetails(data.player))
            .catch(error => showError(error));
    }

};

const showPlayerDetails = (players) => {
    row.textContent = '';
    searchId.value = '';
    for (const player of players) {
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-6')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body d-flex justify-content-between">
                <h4 class="card-title fw-bold pink">${player.strPlayer}</h4>
                <h4 class="card-title fw-bold pink">${player.strNationality}</h4>
            </div>
            <div class="card-body d-flex justify-content-between">
                <a href="${player.strFacebook}" target="_blank"> <i class="fab fa-facebook fa-2x"></i></a>
                <a href="${player.strInstagram}" target="_blank"> <i class="fab fa-instagram fa-2x"></i></a>
            </div>
            <div class="card-footer w-100 d-flex justify-content-between">
                <button class="btn btn-danger"> <i class="fas fa-trash-alt fa-2x"></i> </button>
                <button class="btn btn-success" onclick="playerDetails('${player.idPlayer}')"> <i class="fas fa-eye fa-2x"></i> </button>
            </div>
        </div>
        `
        row.appendChild(div)
            // console.log(player);
    }
};

// ==============Player Details================
const playerDetails = (playerId) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`)
        .then(res => res.json())
        .then(data => playerShow(data.players[0]))
}
const playerShow = (playerdetails) => {
    // console.log(pdetails[0])
    row.textContent = '';
    errorId.textContent = '';
    // console.log(product)
    const div = document.createElement('div');
    div.classList.add('col-lg-12');
    div.innerHTML = `
            <div class="card mb-5">
                <div class="row g-0">
                    <div class="col-4">
                        <img src="${playerdetails.strThumb}" class="img-fluid rounded-start w-100 py-3 ps-1" alt="...">
                        <div class="card-body d-flex justify-content-between">
                            <h6 class="card-title fw-bold pink">Birth: ${playerdetails.dateBorn}</h6>
                            <h6 class="card-title fw-bold pink">B Place: ${playerdetails.strBirthLocation}</h6>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <h6 class="card-title fw-bold pink">Height: ${playerdetails.strHeight}</h6>
                            <h6 class="card-title fw-bold pink">Weight: ${playerdetails.strWeight}</h6>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h2 class="card-title fw-bold pink">${playerdetails.strPlayer}</h2>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active"><a href="index.html" class="text-decoration-none pink">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">${playerdetails.strTeam}</li>
                                </ol>
                            </nav>
                            <p class="card-text text-justify fs-5">${playerdetails.strDescriptionEN}</p>
                        </div>
                    </div>
                <div class="cart text-center d-flex justify-content-between px-3">
                    <a class="card-text text-center" href="${playerdetails.strFacebook}" target="_blank"> <i class="fab fa-facebook fa-3x pink"></i> </a>
                    <a class="card-text text-center" href="${playerdetails.strInstagram}" target="_blank"> <i class="fab fa-instagram fa-3x pink"></i> </a>
                </div>
            </div>
        </div>
    `
    row.appendChild(div);
};