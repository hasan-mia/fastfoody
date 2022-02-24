/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */

// All Variable
// const categoryProductList = document.getElementById('productlist');
const row = document.getElementById('row');

// =========Fetch Food Name==========
const category = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => displayCategory(data))
}
const displayCategory = (categorlist) => {
    // all category
    const allcategory = categorlist.categories;
    for (const category of allcategory) {
        // console.log(category.strCategory);
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.classList.add('col-6')
        div.innerHTML = `
        <a onclick="categoryProduct()">
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
        </a>
        `
        row.appendChild(div)
    }

}

// ===========Category Wise Prodduct============
const categoryProduct = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
        .then(res => res.json())
        .then(data => categoryProductList(data.meals))
}
const categoryProductList = (productlists) => {
    row.innerHTML = ''
    for (const productlist of productlists) {
        console.log(productlist)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${productlist.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productlist.strMeal}</h5>
            </div>
            <div class="card-footer w-100">
                <button class="btn btn-primary">View</button>
            </div>
        </div>
    `
        row.appendChild(div);
    }


}