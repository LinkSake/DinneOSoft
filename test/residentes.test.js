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
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                cellphone: 61423134,
                houseNumber: 0
            });

            assert.throws(newResidente.saveResident());

        });

        it('Debe de tener un nombre completo', () => {
            let newResidente = new ResidentModel({
                firstName : "",
                lastName : "",
                birthday : Date.now(),
                cellphone: 61423134,
                houseNumber: 34
            });

            assert.throws(newResidente.saveResident());

        });

        it('Debe de tener un número de telefono asociado',() => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                cellphone: 0,
                houseNumber: 34
            });

            assert.throws(newResidente.saveResident());

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
            // newResidente.debts = [];
            // console.log(newResidente.debts);
            // assert(newResidente.deleteResident());
        });

        it('No se puede eliminar si tiene casas', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04
            });

            assert.throws(newResidente.deleteResident());
            // newResidente.houseNumber = 0;
            // assert(newResidente.deleteResident());
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
            // newResidente.cars = [];
            // assert(newResidente.deleteResident());
        });

    });
    
    describe('Modificar', () => {
        it('No se puede modificar el numero de casa si existen deudas', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04,
                debts : [
                    "1000"
                ]
            });

            assert.throws(newResidente.setHouseNumber(02))
            newResidente.debts = []
            assert(newResidente.setHouseNumber(02));
        });

        it('No debe de modificar si el nombre no es cadena', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04
            });

            assert.throws(newResidente.setFirstName.bind(null, 1));
            assert.throws(newResidente.setFirstName.bind(null, null));
            assert.throws(newResidente.setFirstName.bind(null, undefined));

            assert.throws(newResidente.setLastName.bind(null, 1));
            assert.throws(newResidente.setLastName.bind(null, undefined));
            assert.throws(newResidente.setLastName.bind(null, [1]));

        });

        it('No debe de modificar el número de casa si no es números', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                birthday : Date.now(),
                houseNumber : 04,
                debts: []
            });

            assert.throws(newResidente.setHouseNumber.bind(null, " "));
            assert.throws(newResidente.setHouseNumber.bind(null, null));
            assert.throws(newResidente.setHouseNumber.bind(null, undefined));
        });
    })

});