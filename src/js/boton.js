const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')

boton.addEventListener('click', () => {
	console.log('me diste clic')
	menu.classList.toggle('hidden')
})