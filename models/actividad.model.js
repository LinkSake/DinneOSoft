const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    date: { type: Date },
    state: { type: String, required: true },
    capacity: { type: Number, required: true },
    peopleAttending: {
        type: [String]
    },
});

/**
 * Class for the Actividad model.
 */
class ActividadClass {
    constructor() {
    }

    /**
     * Método que agrega a una persona al evento siempre y cuando esta se pueda realizar
     * @param personaId {ObjectId} Identificador de la persona
     */
    agregarPersona(personaId) {

    }

    modificarCapacidad(capacidad){

        if(typeof(capacidad) === 'number' && capacidad > 0 && capacidad % 1 !== 0) {
            this.capacity = capacidad;
        } else {
            throw new Error('Error en los valores ingresados');
        }

    }

    /**
     * Cambia el estado de una actividad
     * @param estado {string} Indica el nuevo estado del evento
     */
    setEstado(estado) {
        
    };
}

//Load class
activitySchema.loadClass(ActividadClass);

let ActivityModel = mongoose.model('Activity', activitySchema);

module.exports = {
    ActivityModel
}