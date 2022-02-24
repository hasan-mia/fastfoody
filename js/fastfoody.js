/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// =========Fetch Food Name==========
const category = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => displayCategory(data))
}
const displayCategory = (categorlist) => {
    const categories = document.getElementById('categories');
    // all category
    const allcategory = categorlist.categories;
    // console.log(allcategory);
    for (const category of allcategory) {
        // console.log(category.strCategory);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-6')
        div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${category.strCategoryThumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${category.strCategory}</h5>
                    <p class="card-text">${category.strCategoryDescription.slice(0,30)}</p>
                </div>
                </div>
            </div>
        </div>
        `
        categories.appendChild(div)
    }

}

// ===========Category Wise Prodduct============
const categoryProduct = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
        .then(res => res.json())
        .then(data => console.log(data))
}