/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Orbitron: ['Orbitron']
		},
		extend: {
			colors: {
				danger: '#ff5f40'
			}
		},
	},
	plugins: [],
	}