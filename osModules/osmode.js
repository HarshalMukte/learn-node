const os = require('os')

//x64
const osArch = os.arch()
console.log(osArch);

//for ram
const freeMemory = os.freemem()
console.log(freeMemory / 1024 / 1024 / 1024);

const totalMemory = os.totalmem()
console.log(totalMemory / 1024 / 1024 / 1024);

console.log(os.hostname())

//for location of temp
console.log(os.tmpdir())
