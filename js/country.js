const row = document.getElementById('row');
const searchId = document.getElementById('search');
const errorId = document.getElementById('error');
const country = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => countryRegion(data))
}
const countryRegion = (regions) => {
    // console.log(regions);
    regions.forEach(des => {
        // for (const currency in des.currencies) {
        //     console.log(currency)
        // }
        console.log(des.maps.googleMaps)
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.innerHTML = `
        <div class="card py-1">
            <img src="${des.flags.svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink card-footer">${des.name.official}</h4>
                <div class="d-flex justify-content-between">
                    <p class="card-text text-justify">Capital: ${des.capital}</p>
                    <p class="card-text text-justify">Area: ${des.area}</p>
                </div>
                <div class="d-flex justify-content-between card-footer">
                    <p class="card-text text-justify">Region: ${des.region}</p>
                    <p class="card-text text-justify">Population: ${des.population}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text text-justify">Sub-Region: ${des.subregion}</p>
                    <iframe src="${des.maps.googleMaps}" width="50" height="50" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
        `
        row.appendChild(div);
    })
}

// =================Search Product===============
const searchBar = () => {
    const searchValue = searchId.value;
    if (searchValue == '') {
        errorId.className = 'd-block text-center text-danger fw-bold fs-4'

    } else {
        fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
            .then(res => res.json())
            .then(data => searchResult(data))
            .catch(error => showError(error));
    }

};

const searchResult = (searchresults) => {
    row.textContent = '';
    searchId.value = '';
    searchresults.forEach(searchresult => {
        // console.log(searchresult)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${searchresult.flags.svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink card-footer">${searchresult.name.official}</h4>
                <div class="d-flex justify-content-between">
                    <p class="card-text text-justify">Capital: ${searchresult.capital}</p>
                    <p class="card-text text-justify">Area: ${searchresult.area}</p>
                </div>
                <div class="d-flex justify-content-between card-footer">
                    <p class="card-text text-justify">Region: ${searchresult.region}</p>
                    <p class="card-text text-justify">Population: ${searchresult.population}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text text-justify">Sub-Region: ${searchresult.subregion}</p>
                </div>
            </div>
        </div>
    `
        row.appendChild(div);
    })
}