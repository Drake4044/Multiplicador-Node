const argv = require("yargs")
        .option({
            "b": {
                alias: "base",
                type: "number",
                default: 3,
                demandOption: false,
                describe: "La base de la tabla de multiplicar"
            },
            "l": {
                alias: "listar",
                type: "boolean",
                default: false,
                describe: "Muestra la tabla en consola"
            },
            "h": {
                alias: "hasta",
                type: "number",
                default: 10,
                describe: "El numero hasta cuanto queremos multiplicar"
            }
        })
        .check( (argv, options) => {
            if( isNaN(argv.base) ) {
                throw "La base tiene que ser un numero"
            }
            if( isNaN(argv.hasta) ) {
                throw "El hasta debe ser un numero"
            }
            return true
        } )
        .argv


module.exports = argv