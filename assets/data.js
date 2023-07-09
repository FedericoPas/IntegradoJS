const productsData = [
	{
		name: "PELOTA FUTBOL",
		price: 5000,
		cardImg: "./assets/img/cards/deporte1.jpeg",
		category: "deporte",
		id: 18,
	},
	{
		name: "REMERA HOMBRE",
		price: 3300,
		cardImg: "./assets/img/cards/indumentaria1.jpeg",
		category: "indumentaria",
		id: 11,
	},
	{
		name: "CAMISETA ARGENITNA",
		price: 18000,
		cardImg: "./assets/img/cards/deporte2.jpeg",
		category: "deporte",
		id: 19,
	},
	{
		name: "MANCUERNAS LIVIANAS",
		price: 3000,
		cardImg: "./assets/img/cards/gym1.jpeg",
		category: "gym",
		id: 1,
	},
	{
		name: "MUSCULOSA HOMBRE",
		price: 2700,
		cardImg: "./assets/img/cards/indumentaria3.jpeg",
		category: "indumentaria",
		id: 13,
	},
	{
		name: "PANTALON MUJER",
		price: 3000,
		cardImg: "./assets/img/cards/indumentaria6.jpeg",
		category: "indumentaria",
		id: 16,
	},
	{
		name: "MANCUERNAS PESADAS",
		price: 6000,
		cardImg: "./assets/img/cards/gym2.jpeg",
		category: "gym",
		id: 2,
	},
	{
		name: "RAQUETAS TENIS",
		price: 13000,
		cardImg: "./assets/img/cards/deporte5.jpeg",
		category: "deporte",
		id: 19,
	},
	{
		name: "BARRA",
		price: 2000,
		cardImg: "./assets/img/cards/gym3.jpeg",
		category: "gym",
		id: 3,
	},
	{
		name: "PANTALON HOMBRE",
		price: 4200,
		cardImg: "./assets/img/cards/indumentaria2.jpeg",
		category: "indumentaria",
		id: 12,
	},
	{
		name: "BARRA Z",
		price: 4000,
		cardImg: "./assets/img/cards/gym4.jpeg",
		category: "gym",
		id: 4,
	},
	{
		name: "PALO JOCKEY",
		price: 10000,
		cardImg: "./assets/img/cards/deporte6.jpeg",
		category: "deporte",
		id: 22,
	},
	{
		name: "CINTA DE CORRER",
		price: 56000,
		cardImg: "./assets/img/cards/gym5.jpeg",
		category: "gym",
		id: 5,
	},
	{
		name: "PELOTAS PADEL",
		price: 3460,
		cardImg: "./assets/img/cards/deporte4.jpeg",
		category: "deporte",
		id: 21,
	},
	{
		name: "BANCO PLANO",
		price: 12000,
		cardImg: "./assets/img/cards/gym6.jpeg",
		category: "gym",
		id: 6,
	},
	{
		name: "BANCO INCLINADO",
		price: 17000,
		cardImg: "./assets/img/cards/gym7.jpeg",
		category: "gym",
		id: 7,
	},
	{
		name: "STRAPS",
		price: 1000,
		cardImg: "./assets/img/cards/indumentaria4.jpeg",
		category: "indumentaria",
		id: 14,
	},
	{
		name: "PRENSA",
		price: 28000,
		cardImg: "./assets/img/cards/gym8.jpeg",
		category: "gym",
		id: 8,
	},
	{
		name: "PALETA PADEL",
		price: 35000,
		cardImg: "./assets/img/cards/deporte3.jpeg",
		category: "deporte",
		id: 20,
	},
	{
		name: "DORSALERA",
		price: 16000,
		cardImg: "./assets/img/cards/gym9.jpeg",
		category: "gym",
		id: 9,
	},
	{
		name: "DISCOS",
		price: 5000,
		cardImg: "./assets/img/cards/gym10.jpeg",
		category: "gym",
		id: 10,
	},
	{
		name: "REMERA MUJER",
		price: 3200,
		cardImg: "./assets/img/cards/indumentaria5.jpeg",
		category: "indumentaria",
		id: 15,
	},
	{
		name: "REMERA MUJER",
		price: 4400,
		cardImg: "./assets/img/cards/indumentaria7.jpeg",
		category: "indumentaria",
		id: 17,
	},
	{
		name: "PALETAS PING PONG",
		price: 5000,
		cardImg: "./assets/img/cards/deporte7.jpeg",
		category: "deporte",
		id: 23,
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
