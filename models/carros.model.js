const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carroSchema = new Schema({
    model: { type: String},
    color: { type: String},
    licensePlate: { type: String},
    houseNumber: {type: Number},
    year: {type: Number}
  });

/**
 * Class for the Car model.
 */
class CarroClass {
    constructor() {
    }

    getYear(){
        return this.year;
    }

    setYear(newYear){

        let date = new Date();
        let maxYear = (date.getFullYear() + 3); 

        if (typeof newYear === 'number' && newYear !== null && newYear < maxYear) {
            this.year = newYear;
        } else {
            throw new Error('Ingresa un año valido')
        }
    }

    getColor(){
        return this.color;
    }

    setColor(newColor){
        if (typeof newColor === 'string' && newColor !== null) {
            this.color = newColor;
        } else {
            throw new Error('Ingrese un color valido')
        }
    }

    getModel(){
        return this.model;
    }

    setModel(newModel){
        if (typeof newModel === 'string' && newModel !== null) {
            this.model = newModel;
        } else {
            throw new Error('Ingrese un tipo de modelo correcto')
        }
    }

    getPlate(){
        return this.licensePlate;
    }

    setPlate(newPlate){
        if (typeof newPlate === 'string' 
                && /^[A-Z]{1,3}-[A-Z]{1,3}-[0-9]{1,4}$/.test(newPlate) === true
                && newPlate !== null) {
            this.licensePlate = newPlate;
        } else {
            throw new Error('¡La placa tiene que cumplir con las especificaciónes de la localidad!');
        }

    }

}

//Load class
carroSchema.loadClass(CarroClass);

let CarModel = mongoose.model('Car', carroSchema);



module.exports = {
    CarModel
}