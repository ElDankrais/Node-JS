//os

//vieja forma const os = require('os');

const os = require('node:os');

console.log('Información del sistema operativo:');

console.log(os.platform(), os.release());

console.log('CPUs', os.cpus());

console.log('Memoria Libre', os.freemem() / 1024 / 1024);

console.log('uptime', os.uptime() / 60 / 60);