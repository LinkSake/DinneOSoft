const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const assert = require('chai').assert;

const ResidentModel = require('../models/residentes.model').ResidentModel;

mongoose.promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27014/frac');

describe('Residente', () =>{

    describe('Nuevo', () => {
        it('Debe de estar asociado a una casa',() => {

        });

        it('Debe de tener un nombre completo', () => {

        });

        it('Debe de tener un número de telefono asociado',() => {

        });

    });

    describe('Eliminar', () => {
        it('No se puede eliminar si tiene deudas', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04,
                debts : [
                    "300",
                    "400",
                    "500"
                ]
            });

            assert.throws(newResidente.deleteResident());
            newResidente.debts = [];
            console.log(newResidente.debts);
            assert(newResidente.deleteResident());
        });

        it('No se puede eliminar si tiene casas', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04
            });

            assert.throws(newResidente.deleteResident());
            newResidente.houseNumber = 0;
            assert(newResidente.deleteResident());
        });
            

        it('No se puede eliminar si tiene carros', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04,
                cars : [
                    "Tsuru"
                ]
            });

            assert.throws(newResidente.deleteResident());
            newResidente.cars = [];
            assert(newResidente.deleteResident());
        });

    });
    
    describe('Modificar', () => {
        it('No se debe modificar si no se tiene los permisos necesarios');
        it('No debe de modificar si los datos no son cadenas');
        it('No debe de modificar si los datos no son números');
    })

});