const argv = require('yargs')
                .option('b', {
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias:'listar',
                    type: 'boolean',
                    // demandOption: true,
                    default: false,
                    describe: 'muestra la tabla en consola'
                })
                .option('h', {
                    alias:'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'es hasta donde quiere uno que se multiplique la base'
                })
                .check(( argv, options ) => {
                    if ( isNaN( argv.b )) {
                        throw 'la base tiene que ser un numero';
                    }
                    if ( isNaN( argv.h ) && argv.h > 20 ) {
                        throw 'el hasta donde multiplicar tiene que ser un numero y maximo 20';
                    }
                    if ( typeof argv.l != "boolean") {
                        throw 'la listar tiene que ser booleano';
                    }
                    return true;
                })
                .argv;

module.exports = argv;