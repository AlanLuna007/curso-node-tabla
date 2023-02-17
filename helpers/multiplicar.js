// import {writeFile, writeFileSync} from 'node:fs';
const { writeFileSync } = require('node:fs');
var colors = require('colors');
// export const crearArchivo = ( base = 5) => {
const crearArchivo = ( base, listar, hasta) => {
return new Promise((resolve, reject) => {
    let salida= '';
    let consola = '';
    console.log(hasta);
    for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base*index}\n`;
        consola += `${base} ${'x'.green} ${index} ${'='.green} ${base*index}\n`;
    }
    console.log(listar);
    if(listar){
        console.log('==================='.green)
        console.log( colors.rainbow('tabla del:'),colors.green(base))
        console.log('==================='.green)
        console.log(colors.underline(consola))
    }
    
    writeFileSync( `./salida/tabla-${base}.txt`, salida, (err) => {
        if (err) {
            reject( 'algo salio mallllll' )
            throw err;
        }
        // console.log('tabla-5.txt creado');
    } )
    resolve( `tabla-${base}.txt` );
})
}
const getInfoArchivo = async(base = 5, listar, hasta) => {
    try {
        return await crearArchivo(base, listar, hasta);
    } catch (error) {
        throw error;
    }
}

// export default module.exports = {
module.exports = {
    getInfoArchivo
}