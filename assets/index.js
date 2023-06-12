const menuBtn = document.querySelector(".menu-burger");
const menuNav = document.querySelector(".nav-burger");
const productsContainer = document.querySelector(".cards-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriesConteiner = document.querySelector(".categories")
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-label");
const addCardBtn = document.getElementById("card-button");



const createProductTemplate = (product) => {
  const {name, price, cardImg, category, id} = product;
  return   `
  <div class="card">
    <img src=${cardImg} alt="">
    <div class="card-text">
      <h4>${name}</h4> 
      <span>$ ${price}</span>
    </div>
    <div class="card-buttons ">
      <button
      onclick = "addToCart(${id})"
      id="card-button"
       class="card-button"
       data-id=${id}
       data-img=${cardImg}
       data-name=${name}>
       <p>AGREGAR AL CARRITO</p>
       </button> 
    </div>
  </div>
  `
};


const showBtnMenu = () => {
  if(menuNav.classList.contains("hidden")){
    menuNav.classList.remove("hidden");
    menuNav.classList.add("initial");
    return;
  };
  menuNav.classList.add("hidden");
};

const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList.map(createProductTemplate).join("");
};
const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit -1 ;
}
 const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex}  = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()){
      showMoreBtn.classList.add("hidden")
  }
};





const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList]
  categories.forEach((categoryBtn) => {
    if(categoryBtn.dataset.category !== selectedCategory){
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active")
  });
};
const setShowMoreVisibility = () => {
 if (!appState.activeFilter){
    showMoreBtn.classList.remove("hidden")
    return;
 }
 showMoreBtn.classList.add("hidden")
}

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility();
};
const renderFilteredProducts = () => {
  const filteredProdructs = productsData.filter((product) => {
    return product.category === appState.activeFilter;
  });
  renderProducts(filteredProdructs);
};
const applyFilter = ({target}) => {
    if (!isInactiveFilterBtn(target)){
     return;
    };
    changeFilterState(target);
    productsContainer.innerHTML = "";
    if (appState.activeFilter) {
      renderFilteredProducts();
      appState.currentProductsIndex = 0;
      return;
    }
    renderProducts(appState.products[0]);
  };




const saveProduct = [];
const addToCart = (id) => {
 const productSelected = productsData.find((element) => element.id === id);
 saveProduct.push(productSelected);
 localStorage.setItem("saveProduct",JSON.stringify(saveProduct));
 console.log(productSelected); 
 console.log(saveProduct);
};
 













const init = () =>  {
  renderProducts(appState.products[appState.currentProductsIndex]);
	showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesConteiner.addEventListener("click",applyFilter);
  menuBtn.addEventListener("click",showBtnMenu);
  // addCardBtn.addEventListener("click",addToCart);
};
init();








































































// ///////////////////////////////////HERO////////////////////////////////////





let index = 0,
  sliders,
  timer,
  next,
  prev;
document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos solo una vez y ocultarlos
  slides = document.querySelectorAll(".mySlides");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // Obtener botones y asignar evento
  document.querySelector('.prev').addEventListener('click', () => showSlides(-1));
  document.querySelector('.next').addEventListener('click', () => showSlides(1));
  // Asignar evento para funcionar con teclado
  document.addEventListener('keyup', (e) => {
    if(e.keyCode == 37) {
      // Tecla izquierda
      showSlides(-1);
    } else if(e.keyCode == 39) {
      // Tecla derecha
      showSlides(1);
    }
  });
  showSlides(0);
});

function showSlides(n) {
  // Cancelar temporizador para evitar comportamientos extraños
  clearTimeout(timer);
  // Ocultar elemento actual
  slides[index].style.display = 'none';
  index += n;
  if (index >= slides.length) {
    // Ir al inicio
    index = 0;
  } else if(index < 0) {
    // Ir al final
    index = slides.length - 1;
  }
  // Mostrar elemento
  slides[index].style.display = "block";  
  timer = setTimeout(showSlides, 11000, 1);
}
