const tareas = require('./funciones');
let accion = process.argv[2];

switch (accion) {
    case 'listar':
        console.log('Estas son todas las tareas:');
        tareas.listarTareas();
        break;

    case 'crear':
        console.log('Estamos creando una tarea nueva...');
        const nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        tareas.guardarTarea(nuevaTarea);
        console.log('Muy bien, otra tarea para hacer.');
        break;

    case 'filtrar':
        const estado = process.argv[3];
        const tareasFiltradas = tareas.filtrarPorEstado(estado);
        console.log('Filtrando tareas...');
        tareas.listarTareas(tareasFiltradas);
        break;

    case undefined:
        console.log('Eu vos -> Tenes que pasar una acción');
        break;

    default:
        console.log('No entiendo qué queres hacer');
}