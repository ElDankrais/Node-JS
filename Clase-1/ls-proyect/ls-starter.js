const fs = require('node:fs/promises')

fs.readdir('.')
.then((files) => {
    console.log(files)
})