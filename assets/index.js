const menuBtn = document.querySelector(".menu-burger");
const menuNav = document.querySelector(".nav-burger");
const productsContainer = document.querySelector(".cards-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriesContainer = document.querySelector(".categories")
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart-menu");
const productsCart = document.querySelector(".cart-products");
const total = document.querySelector(".total");
const successModal = document.querySelector(".add-modal");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const cartBubble = document.querySelector(".cart-bubble");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
	localStorage.setItem("cart", JSON.stringify(cart));
};



const createProductTemplate = (product) => {
  const { name, price, cardImg, id } = product;
  return `
  <div class="card">
    <img src=${cardImg} alt="">
    <div class="card-text">
      <h4>${name}</h4> 
      <span>$ ${price}</span>
    </div>
    <div class="card-buttons">
      <button
       class="card-button"
       data-id=${id}
       data-img=${cardImg}
       data-name=${name}>
       <p>AGREGAR AL CARRITO</p>
       </button> 
    </div>
  </div>
  `;
};


const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList.map(createProductTemplate).join("");
};
const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
}
const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
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
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active")
  });
};
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
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
  const filteredProducts = productsData.filter((product) => {
    return product.category === appState.activeFilter;
  });
  renderProducts(filteredProducts);
};
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) {
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


const showBtnMenu = () => {
  if (menuNav.classList.contains("hidden")) {
    menuNav.classList.remove("hidden");
    menuNav.classList.add("initial");
    cartMenu.classList.remove("open-menu")
    return;
  };
  menuNav.classList.add("hidden");
};
const toggleCart = () => {
  if (!cartMenu.classList.contains("open-menu")) {
    cartMenu.classList.add("open-menu")
    menuNav.classList.add("hidden")
  } else if (cartMenu.classList.contains("open-menu")) {
    cartMenu.classList.remove("open-menu")
  }

}

const closeOnScroll = () => {
  if (menuNav.classList.contains("initial") || cartMenu.classList.contains("open-menu")) {
    menuNav.classList.add("hidden")
    cartMenu.classList.remove("open-menu")
  }
}
const closeOnClick = () => {
  menuNav.classList.add("hidden")
}



// CARRITO


const createCartProductTemplate = (cartProduct) => {
  const { id, name, cardImg, quantity, price } = cartProduct;
  return `
    <div class="cart">
        <img src=${cardImg} alt="">
        <h2>${name} </h2>
        <p>${price} </p>
        <div>
            <button>
              <span  data-id=${id}  class="material-symbols-outlined">
                  add
              </span>
            </button>
                <span>${quantity} </span>
            <button >
              <span  data-id=${id} class="material-symbols-outlined">
                minimize
              </span>
            </button>
        </div>
    </div>
  `
};

const renderCart = () => {
	if (!cart.length) {
		productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
		return;
	}
	productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

const getCartTotal = () => {
  return cart.reduce((acc, val) => {
		return acc + Number(val.price) * Number(val.quantity);
	}, 0);
}
const showCartTotal = () => {
	total.innerHTML = `${getCartTotal().toFixed(2)} $`;
};

const createProductData = (product) => {
	const { id, name, price, img } = product;
	return { id, name, price, img };
};

const isExistingCartProduct = (productId) => {
	return cart.find((item) => {
		return item.id === productId;
	});
};

const addUnitToProduct = (product) => {
	cart = cart.map((cartProduct) => {
		return cartProduct.id === product.id
			? { ...cartProduct, quantity: cartProduct.quantity + 1 }
			: cartProduct;
	});
};
const showSuccessModal = (msg) => {
	successModal.classList.add("active-modal");
	successModal.textContent = msg;
	setTimeout(() => {
		successModal.classList.remove("active-modal");
	}, 1500);
};

const createCartProduct = (product) => {
	cart = [
		...cart,
		{
			...product,
			quantity: 1,
		},
	];
};

const disableBtn = (btn) => {
	if (!cart.length) {
		btn.classList.add("disabled");
	} else {
		btn.classList.remove("disabled");
	}
};

const updateCartState = () => {
	//Guardar carrito en LC
	saveCart();
	//Renderizar Carrito
	renderCart();
	//Mostrar el total del carrito
	showCartTotal();
	//Chequear disable de botones
	disableBtn(buyBtn);
	disableBtn(deleteBtn);
	//Render burbuja del cart
	
};

const addProduct = (e) => {
	if (!e.target.classList.contains("card-button")) {
		return;
	}
	const product = createProductData(e.target.dataset);
	//si el producto ya existe
	if (isExistingCartProduct(product.id)) {
		//agregamos unidad al producto
		addUnitToProduct(product);
		//damos feedback
		showSuccessModal("Se agregó una unidad del producto al carrito");
	} else {
		//Si el producto no existe
		//Creamos el nuevo producto en el array
		createCartProduct(product);
		//damos feedback
		showSuccessModal("El producto se ha agregado al carrito");
	}

	//actualizamos data del carrito
	updateCartState();
};

const removeProductFromCart = (existingProduct) => {
	cart = cart.filter((product) => {
		return product.id !== existingProduct.id;
	});
	updateCartState();
};


const substractProductUnit = (existingProduct) => {
	cart = cart.map((product) => {
		return product.id === existingProduct.id
			? { ...product, quantity: Number(product.quantity) - 1 }
			: product;
	});
};


const handleMinusBtnEvent = (id) => {
	const existingCartProduct = cart.find((item) => item.id === id);

	if (existingCartProduct.quantity === 1) {
		//Eliminar producto
		if (window.confirm("¿Desea eliminar el producto del carrito?")) {
			removeProductFromCart(existingCartProduct);
		}
		return;
	}
	//Sacarle unidad al producto
	substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
	const existingCartProduct = cart.find((item) => item.id === id);
	addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
	if (e.target.classList.contains("down")) {
		//Manejamos evento de boton -
		handleMinusBtnEvent(e.target.dataset.id);
	} else if (e.target.classList.contains("up")) {
		//Manejamos evento de boton +
		handlePlusBtnEvent(e.target.dataset.id);
	}
	//Actualizamos estado de carrito
	updateCartState();
};

const resetCartItem = () => {
	cart = [];
	updateCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
	if (!cart.length) return;

	if (window.confirm(confirmMsg)) {
		resetCartItem();
		alert(successMsg);
	}
};

const completeBuy = () => {
	completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!");
};

const deleteCart = () => {
	completeCartAction(
		"¿Desea vaciar el carrito?",
		"No hay productos en el carrito"
	);
};

const init = () => {
  renderProducts(appState.products[appState.currentProductsIndex]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  menuBtn.addEventListener("click", showBtnMenu);
  cartBtn.addEventListener("click", toggleCart);
  window.addEventListener("scroll", closeOnScroll);
  menuNav.addEventListener("click", closeOnClick);
  document.addEventListener("DOMContentLoaded",renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);
  productsContainer.addEventListener("click", addProduct);
  buyBtn.addEventListener("click", completeBuy);
	deleteBtn.addEventListener("click", deleteCart);
	disableBtn(buyBtn);
	disableBtn(deleteBtn);
};
init();








































































// ///////////////////////////////////HERO////////////////////////////////////





// let index = 0,
//   sliders,
//   timer,
//   next,
//   prev;
// document.addEventListener('DOMContentLoaded', function () {
//   // Obtener elementos solo una vez y ocultarlos
//   slides = document.querySelectorAll(".mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // Obtener botones y asignar evento
//   document.querySelector('.prev').addEventListener('click', () => showSlides(-1));
//   document.querySelector('.next').addEventListener('click', () => showSlides(1));
//   // Asignar evento para funcionar con teclado
//   document.addEventListener('keyup', (e) => {
//     if (e.keyCode == 37) {
//       // Tecla izquierda
//       showSlides(-1);
//     } else if (e.keyCode == 39) {
//       // Tecla derecha
//       showSlides(1);
//     }
//   });
//   showSlides(0);
// });

// function showSlides(n) {
//   // Cancelar temporizador para evitar comportamientos extraños
//   clearTimeout(timer);
//   // Ocultar elemento actual
//   slides[index].style.display = 'none';
//   index += n;
//   if (index >= slides.length) {
//     // Ir al inicio
//     index = 0;
//   } else if (index < 0) {
//     // Ir al final
//     index = slides.length - 1;
//   }
//   // Mostrar elemento
//   slides[index].style.display = "block";
//   timer = setTimeout(showSlides, 11000, 1);
// }
