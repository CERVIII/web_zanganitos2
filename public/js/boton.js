const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')

boton.addEventListener('click', () => {
	console.log('me diste clic')
	menu.classList.toggle('hidden')
})

const botonf = document.querySelector('#botonf')
const filter = document.querySelector('#filter')

botonf.addEventListener('click', () => {
	console.log('me diste clic')
	filter.classList.toggle('hidden')
})