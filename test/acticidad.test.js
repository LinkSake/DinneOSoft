const describe = require('mocha').describe;
const it = require('mocha').it;

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

            });
            it('No debe de ser más grande que el cupo máximo del lugar', () => {

            });
            it('El valor número no debe de ser igual o menor a 0', () => {

            });
        });
    });
});