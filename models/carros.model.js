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

    modificarNumero(NewHouse){

        if(typeof(NewHouse) === 'number' && NewHouse > 0 && NewHouse % 1 !== 0) {
            this.houseNumber = NewHouse;
            return this.Number
        } else {
            throw new Error('Error en los valores ingresados');
            
        }

    }

    getLicensePlate(){
        if(typeof this.licensePlate === 'string' ){
            return this.licensePlate;
        } else {
            throw new Error('No se puede guardar algo diferente a una cadena')
        }
    }
    getCarHouse(){
        if(typeof this.houseNumber === 'number' ){
            return this.houseNumber;
        } else {
            throw new Error('No se puede guardar algo diferente a un numero')
        }
        
    }
    

    deleteCar(){
        if(this.licensePlate !== undefined){
            return true;
        } else {
            throw new Error('No se puede eliminar un carro que no existe')
        }
    }

    debug(){
        console.log("Nombre = "+this.firstName);
        console.log("Apellido = "+this.lastName);
        console.log("Celular = "+this.cellphone);
        console.log("Casa = "+this.houseNumber);
        console.log("Deudas = "+this.debts);
        console.log("Carros = "+this.cars);
        console.log("¿Eliminado? = "+this.is_deleted);
        
    }

    

}

//Load class
carroSchema.loadClass(CarroClass);

let CarModel = mongoose.model('Car', carroSchema);



module.exports = {
    CarModel
}