const fs = require('fs');
const Color = require('colors');
const Chalk = require('chalk');

// module.exports.crearArchivo = ( base ) => {
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato introducido como base: "${base}" no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El dato introducido como limite: "${limite}" no es un número`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`)
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato introducido como base: "${base}" no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El dato introducido como limite: "${limite}" no es un número`);
            return
        }

        console.log(Chalk.yellow(`==================\n== Tablas del ${ base } ==\n==================\n`));
        // console.log(`==================\n== Tablas del ${ base } ==\n==================\n`.yellow);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`)
        }

        resolve(`Tabla de multiplicar base:${base} impresa`)

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('tabla-3.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });


// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${ base } * ${ i } = ${ base * i }\n`)
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`The file tabla-${base}.txt has been saved!`);
// });