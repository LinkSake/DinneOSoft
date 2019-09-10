const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const assert = require('chai').assert;

const ActivityModel = require('../models/actividad.model').ActivityModel;

mongoose.promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27014/frac');

describe('Actividad', () =>{
    //Funcionalidad de modificar la actividad
    describe('Modificar', () => {
        describe('Fecha',() =>{

        });
        describe('Estado',() =>{
            it('Si la fecha del evento no ha llegado, no puede estar terminado', () => {

            });
            it('Si la fecha del evento no ha llegado, no puede estar en progreso', () => {

            });
            it('No es diferente a los estados establecidos', () => {

            });
            it('La fecha de terminado no puede ser la fecha actual mientras esté en estado que lo permita', () => {

            });
        });
        describe('Número de personas',() =>{
            it('No debe de ser más grande que el cupo máximo del lugar', () => {

            });

            it('Si el valor es diferente a un número no debe de dejar modificar', () => {
                let newActivity = new ActivityModel({
                    date: Date.now(),
                    state: 'INICIADO',
                    capacity: 10
                });

                assert.throws(newActivity.modificarCapacidad.bind(null,'Hola'));
                assert.throws(newActivity.modificarCapacidad.bind(null, null));
                assert.throws(newActivity.modificarCapacidad.bind(null, undefined));
                assert.throws(newActivity.modificarCapacidad.bind(null, []));
                assert.throws(newActivity.modificarCapacidad.bind(null, [1]));

            });

            it('Si el valor no es entero no se debe de dejar modificar', () => {
                let newActivity = new ActivityModel({
                    date: Date.now(),
                    state: 'INICIADO',
                    capacity: 10
                });

                assert.throws(newActivity.modificarCapacidad.bind(null, 1.1));
                assert.throws(newActivity.modificarCapacidad.bind(null, -2.2));

            });

            it('No debe de ser más grande que el cupo máximo del lugar', () => {

            });

            it('El valor número no debe de ser igual o menor a 0', () => {
                let newActivity = new ActivityModel({
                    date: Date.now(),
                    state: 'INICIADO',
                    capacity: 10
                });

                assert.throws(newActivity.modificarCapacidad.bind(null, 0));
            });

            it.skip('El valor número es correcto', () => {
                let newActivity = new ActivityModel({
                    date: Date.now(),
                    state: 'INICIADO',
                    capacity: 10
                });

                newActivity.modificarCapacidad(42);
                assert(newActivity.capacity = 42);
                newActivity.modificarCapacidad(3)
                assert(newActivity.capacity = 3);
            });


        });
    });
});