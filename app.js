require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./archivos/archivos');

crearArchivo(argv.base)
    .then(nombreArchivo => console.log(`Se creo el archivo ${nombreArchivo}!!!`.green))
    .catch(err => console.log(`Ocurrio el siguiente error al generar el archivo: \n ${err}`.red))