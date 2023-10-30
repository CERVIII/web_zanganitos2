// Supongamos que tienes un array de objetos con la información de cada tarjeta
var tarjetas = [
    {
        coleccion: "Premium",
        imagen: "/generation_1/00-pemium-first.png",
        nombre: "BOB THE MAYOR",
        rareza: "SPECIAL",
        supply: 42,
        precio: "0.005 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A13088419759264613899",
        enlaceCompra: "https://xchain.io/tx/e77206476d47d76a26ee334a5dbb582d5727f54533f7ad6d82ec43713f084dc2",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/01-common-generation_1.png",
        nombre: "BAILEY THE FISHERMAN",
        rareza: "COMMON",
        supply: 250,
        precio: "0.0002 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A16398119246363901552",
        enlaceCompra: "https://xchain.io/tx/609298b3873f306ef05c71802dd0258b974da3928caac2c4cbc2cc464b796b74",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/02-uncommon-generation_1.png",
        nombre: "COOPER THE BAKER",
        rareza: "UNCOMMON",
        supply: 250,
        precio: "0.0006 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A6954690708239459973",
        enlaceCompra: "https://xchain.io/tx/1cc9ba5370b00922962747cb85b250fa566a2701c45571a06a717a2cdf1f34fb",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/03-rare-generation_1.png",
        nombre: "SPENCER THE HUNTER",
        rareza: "RARE",
        supply: 100,
        precio: "0.001 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A10551567752408386463",
        enlaceCompra: "https://xchain.io/tx/c5592faee8f17ec5af0b5dab7fc32893f093dcbb8a68d726dd17cc528c67889c",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/04-epic-generation_1.png",
        nombre: "MORGAN THE ARCHER",
        rareza: "EPIC",
        supply: 42,
        precio: "0.002 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A15164363985027985069",
        enlaceCompra: "https://xchain.io/tx/2796ed152da895ac6c6f76460be9f614946d0d0a492dcadabc31e10558743014",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/05-legendary-generation_1.png",
        nombre: "PARKER THE SAWYER",
        rareza: "LEGENDARY",
        supply: 21,
        precio: "0.004 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A14631792913878597020",
        enlaceCompra: "https://xchain.io/tx/998fec8334ed4e3a46c3f399dfe02b7aa79d47a79971bdfd50970660f310f295",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/06-mythic-generation_1.png",
        nombre: "JORDAN THE PILOT",
        rareza: "MYTHIC",
        supply: 10,
        precio: "0.0075 BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A5557038772254904532",
        enlaceCompra: "https://xchain.io/tx/75daca7ef7dd21c046dd708b244b385bb408a6cf74e30660dae3bb4dc27da405",
        status: "Available"
    },
    {
        coleccion: "Generation_1",
        imagen: "/generation_1/07-special-generation_1.png",
        nombre: "SCOFIELD THE PRISONER",
        rareza: "SPECIAL",
        supply: 5,
        precio: "- BTC",
        enlaceMarket: "https://www.rarestamp.xyz/stamp/A5557038772254904532",
        enlaceCompra: "https://xchain.io/tx/75daca7ef7dd21c046dd708b244b385bb408a6cf74e30660dae3bb4dc27da405",
        status: "Unavailable"
    }
];
// Organizar las tarjetas en grupos por colección
var grupos = {};
tarjetas.forEach(function(tarjeta) {
    var coleccion = tarjeta.coleccion;
    if (!grupos[coleccion]) grupos[coleccion] = [];
    grupos[coleccion].push(tarjeta);
});
var contenedor = document.getElementById("main");
for(var coleccion in grupos)if (grupos.hasOwnProperty(coleccion)) {
    var tarjetasGrupo = grupos[coleccion];
    // Crear una sección para la colección
    var seccion = document.createElement("div");
    seccion.className = "coleccion-section text-4xl flex flex-wrap justify-center";
    // Agregar el nombre de la colección
    var titulo = document.createElement("h1");
    titulo.textContent = coleccion;
    titulo.className = "py-5 text-yellow-400 text-center font-Orbitron font-bold text-3xl lg:text-6xl";
    contenedor.appendChild(titulo);
    // Iterar sobre las tarjetas del grupo y crear las tarjetas individuales
    tarjetasGrupo.forEach(function(tarjetaInfo) {
        var tarjeta = document.createElement("div");
        tarjeta.className = "mx-5 my-5 font-Orbitron text-center text-yellow-300 max-w-sm rounded-xl overflow-hidden shadow-lg shadow-yellow-300 tarjeta";
        tarjeta.setAttribute("data-rareza", tarjetaInfo.rareza);
        tarjeta.setAttribute("data-coleccion", tarjetaInfo.coleccion);
        tarjeta.innerHTML = `
				<img class="w-full" src="${tarjetaInfo.imagen}" alt="${tarjetaInfo.nombre}">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-5">${tarjetaInfo.nombre}</div>
					<div class="flex justify-around">
						<p class="text-white font-bold text-sm md:text-lg text-left">
							RARITY : <br>SUPPLY : <br> PRICE :
						</p>
						<p class="text-white text-sm md:text-lg text-left">
							${tarjetaInfo.rareza} <br> ${tarjetaInfo.supply} <br> ${tarjetaInfo.precio}
						</p>
					</div>
				</div>
				<div class="flex justify-center text-lg font-bold">
					<a href="${tarjetaInfo.enlaceMarket}" target="_blank" rel="noopener noreferrer">
						<div class="p-2 m-3 border-2 border-yellow-300 bg-yellow-400 rounded-lg text-black hover:bg-stone-950 hover:text-yellow-300">
							MARKET
						</div>
					</a>
					${// Condición para mostrar u ocultar el botón "Buy Now!"
        tarjetaInfo.status === "Available" ? `<a href="${tarjetaInfo.enlaceCompra}" target="_blank" rel="noopener noreferrer">
							<div class="p-2 m-3 border-2 border-yellow-300 bg-yellow-400 text-black hover:bg-stone-950 hover:text-yellow-300 font-bold text-center rounded-lg">
								BUY NOW!
							</div>
						</a>` : ""}
				</div>
				<div class="px-6 pb-4">
					<span class="inline-block bg-stone-700 rounded-full px-3 py-1 text-sm font-semibold">${tarjetaInfo.coleccion}</span>
					<span class="inline-block bg-stone-700 rounded-full px-3 py-1 text-sm font-semibold">${tarjetaInfo.rareza.toLowerCase()}</span>
					<span class="inline-block bg-stone-700 rounded-full px-3 py-1 text-sm font-semibold">${tarjetaInfo.status}</span>
				</div>
			`;
        seccion.appendChild(tarjeta);
    });
    // Agregar la sección al contenedor principal
    contenedor.appendChild(seccion);
}
 /* function filterCards(rareza) {
	var tarjetas = document.getElementsByClassName('tarjeta');

	for (var i = 0; i < tarjetas.length; i++) {
		var tarjeta = tarjetas[i];
		var rarezaTarjeta = tarjeta.dataset.rareza;

		if (rareza === 'All' || rarezaTarjeta === rareza) {
			tarjeta.style.display = 'block';
		} else {
			tarjeta.style.display = 'none';
		}
	}
} */ 

//# sourceMappingURL=collection.973ad969.js.map
