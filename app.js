// const fs = require'fs');
// import {writeFile, writeFileSync} from 'node:fs';
// const { writeFileSync } = require('node:fs');
// import { crearArchivo, getInfoArchivo } from './helpers/multiplicar.js';
const { getInfoArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');

    
console.clear();

getInfoArchivo( argv.b, argv.l, argv.h ).then((msg) => {console.log(`${msg} creado`);}).catch((err)=>{console.log(err);})

