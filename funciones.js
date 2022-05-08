const fs = require('fs');

module.exports = {

    archivo: 'tareas.json',

    leerArchivo: function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    listarTareas: function(array){
        if(array === undefined){
            array = this.leerArchivo();
        }
        array.forEach((tarea, indice) => {
            console.log((indice + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
        })
    },

    escribirJson: function(tarea){
        let fromArrayToJson = JSON.stringify(tarea, null, '');
        fs.writeFileSync(this.archivo, fromArrayToJson);
    },

    guardarTarea: function(otraTarea){
        let tareasActuales = this.leerArchivo();
        tareasActuales.push(otraTarea);
        this.escribirJson(tareasActuales);
    },

    filtrarPorEstado: function(estado){
        let tareasActuales = this.leerArchivo();
        const tareasQueFiltramos = tareasActuales.filter(otraTarea => estado === otraTarea.estado);
        return tareasQueFiltramos;
    }
}