// const fs = require('node:fs');

//¿Qué notas de raro al mirar los métodos


//Asíncrono vs Síncrono

//Síncrono
//stat

//readFile
// console.log('LEYENDO ARCHIVO');
// const text = fs.readFileSync('archivo.txt', 'utf-8');
// console.log(text, 'finished reading archivo.txt');
// console.log('Cosas mientras leo el archivo');

// console.log('LEYENDO ARCHIVO');
// const text2 = fs.readFileSync('archivo2.txt', 'utf-8');
// console.log(text2);

// Por qué trabajar async ?


//Asíncrono
// console.log('RELEYENDO ARCHIVO');
// fs.readFile('archivo.txt', 'utf-8', (err, text) => {
//     if (err) throw err;
//     console.log(text)
// } )
// console.log('---->Cosas mientras leo el archivo');

// console.log('LEYENDO ARCHIVO');
// fs.readFile('archivo2.txt', 'utf-8', (err, text) => {
//     if (err) throw err;
//     console.log(text)
// })


const fs = require('node:fs');

const stats = fs.statSync('archivo.txt');

console.log(
    stats.isDirectory(),
    stats.isFile(),
    stats.size
)


//readFile
// console.log('LEYENDO ARCHIVO');
// const text = fs.readFileSync('archivo.txt', 'utf-8');
// console.log(text, 'finished reading archivo.txt');
// console.log('Cosas mientras leo el archivo');

// console.log('LEYENDO ARCHIVO');
// const text2 = fs.readFileSync('archivo2.txt', 'utf-8');
// console.log(text2);

//readFile asincrónico
console.log('RELEYENDO ARCHIVO');
fs.readFile('archivo.txt', 'utf-8', (err, text) => {
    if (err) throw err;
    console.log(text)
} )
console.log('---->Cosas mientras leo el archivo');

console.log('LEYENDO ARCHIVO');
fs.readFile('archivo2.txt', 'utf-8', (err, text) => {
    if (err) throw err;
    console.log(text)
})