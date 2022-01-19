const argv = require('yargs')
    .option('base', {
        alias: 'b',
        description: 'Base de la tabla a crear',
        demandOption: true
    })
    .check((argv) => {
        if (!Number.isInteger(argv.base)) {
            throw Error('Debe ingresar un numero entero para "base"');
        }
        return true;
    })
    .help()
    .argv;

module.exports = { argv };