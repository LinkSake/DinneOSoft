const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const { expect } = require('chai');

const ResidentModel = require('../models/residentes.model').ResidentModel;

mongoose.promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27014/frac');

describe('Residente', () =>{

    describe('Un residente nuevo debe de', () => {
        it('Estar asociado a una casa',() => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                cellphone: 61423134,
                houseNumber: 0
            });



        });

        it('Tener un nombre completo', () => {
            let newResidente = new ResidentModel({
                cellphone: 61423134,
                houseNumber: 34
            });



        });

        it('Conctar con un número de telefono',() => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                houseNumber: 34
            });

        


        });

    });

    describe('Si se quiere eliminar un residente ', () => {
        it('No puede tiener deudas', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                houseNumber : 04,
                debts : [
                    {enero:'300'},
                    {febrero:'400'},
                    {marzo: '500'}
                ]
            });

            expect(newResidente.deleteResident.bind(null, null)).to.throw();
            newResidente.deleteDebt({enero:'300'});
            newResidente.deleteDebt({febrero:'400'});
            newResidente.deleteDebt({marzo:'500'});
            newResidente.deleteResident();
            expect(newResidente.is_deleted).to.be.true;

        });

        it('Si está vacio', () => {
            let newResidente = new ResidentModel();

            expect(newResidente.deleteResident.bind(null, null)).to.throw();

        });
            

        it('No debe de tener ningún automovil relacionado', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                houseNumber : 04,
                cars : [
                    "Tsuru"
                ]
            });

            expect(newResidente.deleteResident.bind(null,null)).to.throw();
            newResidente.deleteCar("Tsuru");
            newResidente.deleteResident();
            expect(newResidente.is_deleted).to.be.true;

        });

    });
    
    describe('Al editar un residente', () => {
        it('No se puede modificar el numero de casa si existen deudas', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                houseNumber : 04,
                debts : [
                    {enero:'300'},
                    {febrero:'400'},
                    {marzo: '500'}
                ]
            });

            expect(newResidente.setHouseNumber.bind(05)).to.throw();

        });

        it('No se puede cambiar al al mismo número de casa', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                houseNumber : 04
            });

            expect(newResidente.setHouseNumber.bind(null, 04)).to.throw();
            newResidente.setHouseNumber(05);
            expect(newResidente.setHouseNumber.bind(null, 05)).to.throw();

        });

        it('No debe de modificar el número de casa si no es números', () => {
            let newResidente = new ResidentModel({
                firstName : 'Francisco',
                lastName : 'Herte',
                houseNumber : 04,
                debts: []
            });

            expect(newResidente.setHouseNumber.bind(null, "")).to.throw();
            expect(newResidente.setHouseNumber.bind(null, null)).to.throw();
            expect(newResidente.setHouseNumber.bind(null, undefined)).to.throw();

        });
    })

});