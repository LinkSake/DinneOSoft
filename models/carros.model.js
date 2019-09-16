const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carroSchema = new Schema({
    model: { type: String, required: true },
    color: { type: String, required: true },
    licensePlate: { type: String, required: true },
    houseNumber: {type: Number, required: true, default: 0},
    year: {type: Number, require: true}
  });

/**
 * Class for the Car model.
 */
class CarroClass {
    constructor() {
    }
    setHouseNumber(newHouse){
        if(this.debts = [] && typeof(newHouse) === 'number'){
            if (this.houseNumber !== newHouse) {
                this.houseNumber = newHouse;
            }
        } else {
            throw new Error('No se puede cambiar de residencia si se tiene deudas pendientes');
        }
    }

    setFirstName(newFirstName){
        if(typeof(newFirstName) === 'string'){
            this.fistName = newFirstName;
        } else {
            throw new Error('Ingresa un nombre válido');
        }
    }

    setLastName(newLastName){
        if(typeof(newLastName) === 'string'){
            this.fistName = newLastName;
        } else {
            throw new Error('Ingresa un nombre válido');
        }
    }
    
    setPhoneNumber(newNumber) {
        if(typeof(newNumber) === 'number'){
            this.cellphone = newNumber;
        } else {
            throw new Error('Ingresa un número de telefono valido');
        } 
    }


    setHouseNumber(newNumber) {
        if(typeof(newNumber) === 'number'){
            this.houseNumber = newNumber;
        } else {
            throw new Error('Ingresa un número de casa valido');
        }
    }

    saveResident() {
        if(this.houseNumber !== 0 || this.fistName !== "" || this.lastName !== "" || this.cellphone !== 0 ) {
            return true;
        } else {
            throw new Error('¡Debes de tener todos los datos obligatorios!');
        }
    }

    deleteResident() {
        if(this.is_deleted === false) {
            if(this.debts.length === 0 && this.cars.length === 0 && this.houseNumber === 0){
                if (this.firstName !== "" || this.lastName !== "" || this.cellphone !== 0) {
                    this.is_deleted = true;   
                } else {
                    throw new Error("¡No puedes eliminar un residente vacio!");
                }
            } else {
                throw new Error("¡No puedes eliminar un residente con datos vinculados!");
            }
        } else {
            throw new Error("¡No puedes eliminar un residente que ya ha sido eliminado!");
        }
    }

    getDebts() {
        return this.debts;
    }

    deleteDebt(debt){
        if(this.debts !== []){
            let index = this.debts.indexOf(debt);
            this.debts.splice(index, 1);
        } else {
            throw new Error('No se puede eliminar una deuda que no existe')
        }
    }

    deleteCar(car){
        if(this.cars !== []){
            let index = this.cars.indexOf(car);
            this.cars.splice(index, 1);
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