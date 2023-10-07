//PROBLEMA

// -> unix /
// -> windows \

const path = require('node:path');

//HAY QUE INCLUIR TODOS LOS SISTEMAS OPERATIVOS

console.log(path.sep);

//unir rutas con path.join

const filePath = path.join('content', 'users', '?id=24');
console.log(filePath);

const base = path.basename('/tmp/bin/vfrvwrgv(egrgrwq2g/24egrw3aghrwhrwghw3rg4wtqw34wee5/password.txt');
console.log(base);

const extension = path.extname('/tmp/bin/vfrvwrgv(egrgrwq2g/24egrw3aghrwhrwghw3rg4wtqw34wee5/password.txt');
console.log(extension);