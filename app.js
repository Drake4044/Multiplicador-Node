const argv = require("./config/yargs")
const { crearFile } = require("./helpers/multiplicar")
const colors = require("colors")

// const [ , , arg3 = "base=5"] = process.argv // metido para comprender bases
// const [ , base = 5 ] = arg3.split("=")

crearFile(argv.base, argv.listar, argv.hasta)
    .then( fileName => console.log("\n" + colors.magenta(fileName), colors.bold.green("creado")))
    .catch( err => console.log(err))

