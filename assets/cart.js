const productsContainer = document.querySelector(".cards-container");
const totalsValue = document.getElementById("total-value");

const products = JSON.parse(localStorage.getItem("saveProduct"));
console.log(products);



const createProductTemplate = (product) => {
    const { name, price, cardImg, category, id } = product;
    return `
    <div class="card" style="display: flex;">
        <div><img src=".${cardImg}" width="200px" alt=""></div>
        <div>
            <h3>${name}</h3>
            <span>${price}</span>
        </div>
        <div>
            <button>
                <span class="material-symbols-outlined">
                    add
                </span>
            </button>
            <span>${price}</span>
            <button>
                <span class="material-symbols-outlined">
                    horizontal_rule
                </span>
            </button>
        </div>
    </div>
    `
}


const renderProducts = (productsList) => {
    productsContainer.innerHTML += productsList.map(createProductTemplate).join("");
    let onePrice = 0;
    productsList.map((product) => { 
         onePrice = onePrice + product.price;
    })
    totalsValue.innerHTML = onePrice;
};




function init() {
    renderProducts(products);
};
init();
