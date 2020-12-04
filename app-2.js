// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv))
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: { demand: true, alias: 'b' },

//     })
//     .argv

// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: { demand: true, alias: 'b' },
        limite: { default: 10, alias: 'l' }

    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: { demand: true, alias: 'b' },
        limite: { default: 10, alias: 'l' }

    })
    .help()
    .argv;
const { crearArchivo, listarTabla } = require('./multiplicar/Multiplicar')


// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv2);
// console.log(argv);
// console.log('Base:', argv.base);
// console.log('Limite:', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`The file ${ archivo } has been saved!`))
//     .catch(e => console.log(e))

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(e => console.log(e))

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`The file ${ archivo } has been saved!`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Vomando no reconocido');
}