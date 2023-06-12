const productsData = [
    {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "gym",
    id: 1,
   },
   {
    name:"KIT DISCOS",
    price: 20,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "gym",
    id: 2,
   },
   {
    name:"INDUMENTARIA",
    price: 1,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "indumentaria",
    id: 3,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "accesorios",
    id: 4,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "dress",
    id: 5,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "dress",
    id: 6,
   },
   {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "accesorios",
    id: 7,
   },
   {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "accesorios",
    id: 8,
   },
   {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "accesorios",
    id: 9,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "indumentaria",
    id: 10,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "indumentaria",
    id: 11,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "indumentaria",
    id: 12,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "dress",
    id: 13,
   },
   {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "gym",
    id: 14,
   },
   {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "gym",
    id: 15,
   },
   {
    name:"KIT DISCOS",
    price: 13,
    cardImg:"./assets/img/cards/images.jpeg",
    category: "indumentaria",
    id: 16,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/descarga.jpeg",
    category: "dress",
    id: 17,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/pelota.avif",
    category: "deporte",
    id: 18,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/pelota.avif",
    category: "deporte",
    id: 19,
   },
   {
    name:"INDUMENTARIA",
    price: 13,
    cardImg:"./assets/img/cards/pelota.avif",
    category: "deporte",
    id: 20,
   },
];



const divideProductsInParts = (size) => {
	let productsList = [];
	for (let i = 0; i < productsData.length; i += size) {
		productsList.push(productsData.slice(i, i + size));
	}
	return productsList;
};

const appState = {
	products: divideProductsInParts(8),
	currentProductsIndex: 0,
	productsLimit: divideProductsInParts(8).length,
	activeFilter: null,
};









