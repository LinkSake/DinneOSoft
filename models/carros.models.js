const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carroSchema = new Schema({
    model: { type: String, required: true },
    color: { type: String, required: true },
    licensePlate: { type: String, required: true },
    house: { type: ObjectId, required: true, ref: 'House' },
  })

/**
 * Class for the Residente model.
 */
class CarroClass {
    constructor() {
    }


    deleteCar() {
        if(this.debts === [] || this.cars === [] || this.houseNumber === 0){
            console.log("Okay!");
        } else {
            throw new Error("¡No puedes eliminar un residente con datos vinculados!");
        }
    }

}

//Load class
carroSchema.loadClass(CarroClass);

let CartModel = mongoose.model('Car', carroSchema);

module.exports = {
    CarModel
}