// =========Fetch Contry Name==========
const country = () => {
    fetch(`https://restcountries.com/v2/all`)
        .then(res => res.json())
        .then(data => countryRegion(data))
}
const countryRegion = (region) => {
    console.log(region);
    region.forEach(des => {
        console.log(des)
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.innerHTML = `
        <div class="card py-1">
            <img src="${des.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink card-footer">${des.name}</h4>
                <div class="d-flex justify-content-between">
                    <p class="card-text text-justify">Capital: ${des.capital}</p>
                    <p class="card-text text-justify">Area: ${des.area}</p>
                </div>
                <div class="d-flex justify-content-between card-footer">
                    <p class="card-text text-justify">Region: ${des.region}</p>
                    <p class="card-text text-justify">Population: ${des.population}</p>
                </div>
            </div>
        </div>
        `
        row.appendChild(div);
    })
}