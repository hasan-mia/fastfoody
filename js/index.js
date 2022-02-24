/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// =========Fetch Contry Name==========
const frontEnd = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_countries.php')
        .then(res => res.json())
        .then(data => displayFrontend(data))
}
const displayFrontend = (countrylist) => {
    const contries = document.getElementById('contries');
    // const country20 = countrylist.slice(0, 20);
    console.log(countrylist.countries);
    for (const country of countrylist.countries) {
        console.log(country.name_en)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-6')
        div.innerHTML = `
        <h1>${country.name_en}</h1>
        `
        contries.appendChild(div)
    }

}