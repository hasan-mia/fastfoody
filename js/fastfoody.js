/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */

// row Variable
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
        div.classList.add('col-lg-6')
        div.classList.add('col-6')
        div.innerHTML = `
        <a href="#" onclick="categoryProduct('${category.strCategory}')" class="text-decoration-none text-black">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${category.strCategoryThumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title fw-bold pink">${category.strCategory}</h3>
                    <p class="card-text">${category.strCategoryDescription.slice(0,55)}</p>
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
const categoryProduct = (strCategory) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        .then(res => res.json())
        .then(data => categoryProductList(data.meals))
}
const categoryProductList = (productlists) => {
    row.innerHTML = ''
    for (const productlist of productlists) {
        // console.log(productlist.idMeal)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${productlist.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink">${productlist.strMeal}</h4>
            </div>
            <div class="card-footer w-100 text-center">
                <button class="btn pink" onclick="productDetails(${productlist.idMeal})"> <i class="fas fa-eye fa-2x"></i> </button>
            </div>
        </div>
    `
        row.appendChild(div);
    }


}

// ==============Product Details================
const productDetails = (productId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
        .then(res => res.json())
        .then(data => productShow(data.meals))
}
const productShow = (pdetails) => {
    // console.log(pdetails[0])
    row.textContent = '';
    for (const product of pdetails) {
        // console.log(product)
        const div = document.createElement('div');
        div.classList.add('col-lg-12');
        div.innerHTML = `
        <div class="card mb-5">
            <div class="row g-0">
                <div class="col-md-5">
                    <img src="${product.strMealThumb}" class="img-fluid rounded-start h-100 py-3 ps-1" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h2 class="card-title fw-bold pink">${product.strMeal}</h2>
                        <p class="card-text text-justify fs-5">${product.strInstructions}</p>
                    </div>
                    <div class="cart text-center d-flex justify-content-between px-3">
                    <a class="card-text text-center" href="${product.strYoutube}" target="_blank"> <i class="fab fa-youtube-square fa-3x pink"></i> </a>
                        <button class="btn bg-pink text-white fs-4 fw-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        `
        row.appendChild(div)
    }
}