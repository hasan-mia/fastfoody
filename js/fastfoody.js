/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */

// row Variable
const row = document.getElementById('row');
const searchId = document.getElementById('search');
const errorId = document.getElementById('error');
// Error 
const showError = (error) => {
    errorId.className = 'd-block text-center text-danger fw-bold fs-4';
    return errorId.className;
};
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
        <div class="card mb-3 border-pink" style="max-width: 540px;">
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

};

// ===========Category Wise Prodduct============
const categoryProduct = (strCategory) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        .then(res => res.json())
        .then(data => categoryProductList(data.meals))
}
const categoryProductList = (productlists) => {
    row.innerHTML = '';
    errorId.textContent = '';
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
    errorId.textContent = '';
    for (const product of pdetails) {
        // console.log(product)
        const div = document.createElement('div');
        div.classList.add('col-lg-12');
        div.innerHTML = `
        <div class="card mb-5">
            <div class="row g-0">
                <div class="col-12">
                    <img src="${product.strMealThumb}" class="img-fluid rounded-start w-100 py-3 ps-1" alt="...">
                </div>
                <div class="col-12">
                    <div class="card-body">
                        <h2 class="card-title fw-bold pink">${product.strMeal}</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active"><a href="index.html" class="text-decoration-none pink">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${product.strCategory}</li>
                            </ol>
                        </nav>
                        <p class="card-text text-justify fs-5">${product.strInstructions}</p>
                    </div>
                    <div class="cart text-center d-flex justify-content-between px-3">
                    <a class="card-text text-center" href="${product.strYoutube}" target="_blank"> <i class="fab fa-youtube-square fa-3x pink"></i> </a>
                        <button class="btn bg-pink text-white fs-4 fw-bold" onclick="addCart()">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        `
        row.appendChild(div);
    }
};

// =============Add Cart=============
const cartId = document.getElementById('cart');
let cart = parseInt(cartId.innerText);
const addCart = () => {
    cart++;
    cartId.innerText = cart;
    // console.log(cart)
}

// =================Search Product===============
const searchBar = () => {
    const searchValue = searchId.value;
    if (searchValue == '') {
        errorId.className = 'd-block text-center text-danger fw-bold fs-4'

    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(res => res.json())
            .then(data => searchResult(data.meals))
            .catch(error => showError(error));
    }

};

const searchResult = (searchresults) => {
    row.textContent = '';
    searchId.value = '';
    searchresults.forEach(searchresult => {
        // console.log(searchresult.strMeal)
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${searchresult.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink">${searchresult.strMeal}</h4>
            </div>
            <div class="card-footer w-100 text-center">
                <button class="btn pink" onclick="productDetails(${searchresult.idMeal})"> <i class="fas fa-eye fa-2x"></i> </button>
            </div>
        </div>
    `
        row.appendChild(div);
    })
}