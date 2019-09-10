const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const residenteSchema = new Schema({
    fistName: {type: String, required: true},
    lastName: {type: String, required: true}, 
    birthday: {type: Date, required: true},
    cellphone: {type: Number},
    houseNumber: {type: Number, required: true},
    housemates: {type: [String]},
    cars: {type: [String]},
    debts: {type: [String]},
});

/**
 * Class for the Residente model.
 */
class ResidenteClass {
    constructor() {
    }


    deleteResident() {
        if(this.debts === [] || this.cars === [] || this.houseNumber === 0){
            console.log("Okay!");
        } else {
            throw new Error("¡No puedes eliminar un residente con datos vinculados!");
        }
    }

}

//Load class
residenteSchema.loadClass(ResidenteClass);

let ResidentModel = mongoose.model('Resident', residenteSchema);

module.exports = {
    ResidentModel
}