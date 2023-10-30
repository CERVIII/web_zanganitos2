
/* Boton Menu Header */
const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')

boton.addEventListener('click', () => {
	console.log('me diste clic')
	menu.classList.toggle('hidden')
})

//const boton = document.querySelector('#boton')
const filters = document.querySelector('#filters')

boton.addEventListener('click', () => {
	console.log('me diste clic')
	filters.classList.toggle('hidden')
})