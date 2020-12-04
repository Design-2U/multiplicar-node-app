const { crearArchivo, listarTabla } = require('./multiplicar/Multiplicar');
const argv = require('./config/yargs').argv;
const Chalk = require('chalk');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(e => console.log(e))

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('El archivo ' + Chalk.green.italic(archivo) + ' ha sido creado!'))
            .catch(e => console.log(e))
        break;

    default:
        console.log(Chalk.red.italic('Comando no reconocido'));
}