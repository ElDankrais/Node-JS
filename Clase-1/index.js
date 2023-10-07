//console.log(window)

console.log(globalThis);

console.log(globalThis.console === console);

//Módulos

//Common JS require module
// const {sum} = require('./patron-modulo/suma');

// console.log(sum(9, 10));

//ECMAScript Modules

//¿Cómo convertir el tipo de módulos?
import {sum, resta, multiplicacion} from './patron-modulo/operaciones.mjs'

console.log(sum(9, 10));
console.log(resta(9, 10));
console.log(multiplicacion(9, 10));