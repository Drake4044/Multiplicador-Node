const fs = require("fs")
const colors = require("colors")

const crearFile = async ( base = 5, listar, hasta ) => {

    try {

        let salida  = ""
        let consola = ""

        const fileName = `TablaX${base}.txt`

        console.clear()
    
    
        for ( let i = 1; i <= hasta; i++ ) {
            consola += `${ base } ${colors.cyan("x")} ${ i } ${colors.grey("=")} ${ colors.green(base * i) }${ i < hasta ? "\n" : "" }`
            salida += `${ base } x ${ i } = ${ base * i }${ i < hasta ? "\n" : "" }`
        }
    

        if( listar ){
    
            console.log(colors.blue("\n========================="));
            console.log(colors.blue("       Tabla del"), colors.bold.green(base) );
            console.log(colors.blue("========================="));

            console.log(consola)
        }
        
        fs.writeFileSync( `./salida/${fileName}` , salida ) 
    
        return fileName 
    } catch (error) {
        throw error
    } 

}

module.exports = {
    crearFile
}