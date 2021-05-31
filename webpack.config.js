const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    mode: 'production'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    mode: 'development',
    compress: true,
    port: 9000
  }
};

//Webpack agrupa todas las dependencias y generar un version desplegable de la aplicacion.
