//Node.js SÍ MANEJA PROMESAS, SIIIIIIIIIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

const {readFile} = require('node:fs/promises');
// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

// console.log('================================Leyendo el archivo================================');
// fs.readFile('archivo.txt', 'utf-8')
//     .then(text => {
//         console.log('primer texto: ', text)
//     })

// console.log('---->Cosas mientras leo el archivo');

// console.log('LEYENDO Segundo ARCHIVO');
// fs.readFile('archivo2.txt', 'utf-8')
//     .then(text => {
//         console.log('segundo texto: ', text)
//     })

//promisify

// const fs = require('node:fs');


// console.log('=======leyendo archivo=====');
// readFilePromise('archivo.txt', 'utf-8')
//     .then(text => {
//         console.log('primer texto: ', text)
//     })

//async await

// console.log('================================Leyendo el archivo================================');
// const text = await readFile('archivo.txt', 'utf-8')
// console.log('primer texto: ', text)

// console.log('---->Cosas mientras leo el archivo');

//¿Cómo solucionarlo sin .mjs? Con una IIFE

(
    async () => {
        console.log('================================Leyendo el archivo================================');
        const text = await readFile('archivo.txt', 'utf-8')
        console.log('primer texto: ', text)

        console.log('---->Cosas mientras leo el archivo');
    }
)()


