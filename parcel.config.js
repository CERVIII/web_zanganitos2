// parcel.config.js

module.exports = {
	// Agrega configuraciones específicas según sea necesario
	// Por ejemplo, para procesar imágenes en una carpeta 'img':
	module: {
	  rules: [
		{
		  test: /\.(png|jpg|jpeg|gif)$/i,
		  use: ['file-loader'],
		  exclude: /node_modules/,
		},
	  ],
	},
  };
  