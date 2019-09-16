const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const assert = require('chai').assert;

const CarModel = require('../models/carros.model').CarModel;

mongoose.promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27014/frac');

describe.skip('Autos',function(){
    //Funcionalidad de modificar Actividad
    describe('Registrar Auto',function(){
        it('No debe de tener nulos');
        it('Deberia de guardarse');
            let newCar = newCarModel({
                model:'Derby',
                color: 'rojo',
                licensePlate: 'EML-LS-8565',
                houseNumber: 34,
                year: 2005
            });
        
            describe('Dar de Alta Año',function(){
                var year = (currentTime.getFullYear() + 3); 

                it('No puede ser mayor del año actual +2');
                it('No puede ser nulo');
                it('tiene que ser un numero');
                
                
                expect().to.be.a("number");
                expect().to.be.not.deep.equal(null);
                expect().to.be.below(year);
            });
            describe('Dar de Alta color',function(){
                it('tipo String');
                it('No puede ser nulo');

                expect().to.be.a("string");
                expect().to.be.not.deep.equal(null);
            });
            describe('Dar de Alta Modelo',function(){
                it('Tiene que ser de tipo String');
                it('No puede ser nulo');

                expect().to.be.a("string");
                expect().to.be.not.deep.equal(null);   
            });

            describe('Dar de Alta Placa',function(){
                it('Tiene que ser de tipo String');
                it('No puede ser nulo');

                expect().to.be.not.deep.equal(null); 
                //Comparacion con el regex error   
                
            });
            
            describe('Asignar casa',function(){
                it('No puede ser nulo');
                it('tiene que ser un numero');
            
                expect().to.be.not.deep.equal(null);   
                expect().to.be.a("number"); 
            });
            
          
        
    
        });
    
    describe('Modificar Auto',function(){
        //Debe de existit un registro 
        describe('Modificar Año',function(){
            var year = (currentTime.getFullYear() + 3); 
            it('no puede ser mayor del año actual +3');
            it('No puede ser nulo');

            expect().to.be.a("number");
            expect().to.be.not.deep.equal(null);
            expect().to.be.below(year);
            
       });
        describe('Modificar color',function(){
            it('tipo String');
            it('No puede ser nulo');

            expect().to.be.a("string");
            expect().to.be.not.deep.equal(null);
       
        });
        describe('Modificar Modelo',function(){
            it('Tiene que ser de tipo String');
            it('No puede ser nulo');

            expect().to.be.a("string");
            expect().to.be.not.deep.equal(null);
        });

        describe('Modificar Placa',function(){
           it('Tiene que ser de tipo String');
           it('No puede ser nulo');
           //Agregar un REGEX para validar placa
           expect().to.be.a("string");
           expect().to.be.not.deep.equal(null);
           
           
       });
       
       describe('Modificar casa',function(){
           it('No puede ser nulo');

           expect().to.be.a("number");
           expect().to.be.not.deep.equal(null);

           
           
       });      

   });


   describe('Eliminar Auto',function(){
       it('Tiene que existir');
       it('No puede existir despues de eliminarse');



    });

    describe('Cambiar Auto',function(){
        it('Tiene que existir');
        it('no puede haber campos nulos');
        it('Año no puede ser mayor al actual +2');
        it('Color tiene que ser string');
        it('Modelo tiene que ser String');
        it('La placa debe de coincidir con el regex');

        
 
     });

});