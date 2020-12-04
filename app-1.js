const fs = require('fs');

let base = 8;

for (let i = 1; i <= 10; i++) {
    console.log(`${ base } * ${ i } = ${ base * i }`)
}

let data = '';

for (let i = 1; i <= 10; i++) {
    data += (`${ base } * ${ i } = ${ base * i }\n`)
}

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('tabla-3.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file tabla-${base}.txt has been saved!`);
});