const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const residenteSchema = new Schema({
    fistName: {type: String},
    lastName: {type: String}, 
    birthday: {type: Date},
    cellphone: {type: Number},
    houseNumber: {type: Number},
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


    setHouseNumber(oldHouse, newHouse){
        if(this.debts = [] ){

        } else {
            throw new Error()
        }
    }

    saveResident() {
        if(this.houseNumber !== 0 || this.fistName !== "" || this.lastName !== "" || this.cellphone !== 0 ) {
            console.log("Save: Okay!");
            return true;
        } else{
            throw new Error('¡Debes de tener todos los datos obligatorios!');
        }
    }

    deleteResident() {
        if(this.debts === [] || this.cars === [] || this.houseNumber === 0){
            console.log("Delete: Okay!");
            return true;
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