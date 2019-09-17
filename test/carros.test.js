const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const assert = require('chai').assert;
const { expect } = require('chai');

const CarModel = require('../models/carros.model').CarModel;

mongoose.promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27014/frac');

describe('Autos',function(){
    //Funcionalidad de modificar Actividad
    describe('Registrar Auto',function(){
        
            describe('Dar de Alta Año',function(){
                var date = new Date();
                var year = (date.getFullYear() + 3); 

                it('No puede ser mayor del año actual +3',function(){
                    
                    expect().to.be.below(year);
                });

                it('No puede ser nulo',function(){
                    
                    expect().to.be.not.deep.equal(null);
                });
                
                it('tiene que ser un numero',function(){
                    
                    expect().to.be.a("number");
                });
                
                
            });
            describe('Dar de Alta color',function(){
                it('tipo String',function(){
                    
                    expect().to.be.a("string");
                });

                it('No puede ser nulo',function(){
                    
                    expect().to.be.not.deep.equal(null);
                });

            });
            describe('Dar de Alta Modelo',function(){
                it('Tiene que ser de tipo String',function(){
                    
                    expect().to.be.a("string");
                });

                it('No puede ser nulo',function(){
                    
                    expect().to.be.not.deep.equal(null);   
                });
            });

            describe('Dar de Alta Placa',function(){
                it('Tiene que coincidir con el patron del REGEX',function(){

                    expect().to.be.true;

                }); 
                
                it('No puede ser nulo',function(){
                    let newCarro = new CarModel({
                        model: 'tsuru',
                        color:'rojo',
                        year: 2005,
                        houseNumber: 34,
                    });
        
                    expect(newCar.getLicensePlate).to.throw;
                    
                }); 
                
            });
            
            describe('Asignar casa',function(){
                it('No puede ser nulo', function(){

                    let newCarro = new CarModel({
                        model: 'tsuru',
                        color:'rojo',
                        licensePlate:'ABC-AVD-4656',
                        year: 2005,
                    });
     
                    expect(newCarro.getCarHouse).to.throw;
                   
                });
                it('tiene que ser un numero', function(){
                    let newCarro = new CarModel({
                        model: 'tsuru',
                        color:'rojo',
                        licensePlate:'ABC-AVD-4656',
                        houseNumber: 34,
                        year: 2005,
                    });
                    
                    expect(newCarro.getCarHouse()).to.be.a("number");

                });
            
                  
                
            });
            
          
        
    
        });
    
    describe('Modificar Auto',function(){
        //Debe de existit un registro 
        describe('Modificar Año',function(){
            var date = new Date();
            var year = (date.getFullYear() + 3); ; 
            it('no puede ser mayor del año actual +3', function(){
                
                expect().to.be.below(year);
            });

            it('No puede ser nulo', function(){
                
                expect().to.be.not.deep.equal(null);
            });

            it('tiene que ser un numero', function(){
            
                expect().to.be.a("number");
            });
            
            
       });
        describe('Modificar color',function(){
            it('tipo String', function(){
                
                expect().to.be.a("string");
            });

            it('No puede ser nulo', function(){
                
                expect().to.be.not.deep.equal(null);
            });
       
        });
        describe('Modificar Modelo',function(){
            it('Tiene que ser de tipo String', function(){
                let newCarro = new CarModel({
                    model: 'tsuru',
                    color:'rojo',
                    licensePlate:'ABC-AVD-4656',
                    year: 2005,
                    houseNumber: 34,
                });
    

                expect().to.be.a("string");
            });

            it('No puede ser nulo', function(){
                let newCarro = new CarModel({
                    color:'rojo',
                    licensePlate:'ABC-AVD-4656',
                    year: 2005,
                    houseNumber: 34,
                });
 

                expect(newCarro.getModelo).to.be.not.deep.equal(null);
            });
            
        });

        describe('Modificar Placa',function(){
           it('Tiene que coincidir con el REDEX', function(){
                let newCarro = new CarModel({
                    model: 'tsuru',
                    color:'rojo',
                    licensePlate:'ABC-AVD-4656',
                    year: 2005,
                    houseNumber: 34,
                });

               expect().to.be.true;
                //TODO : Realizar prueba de placas redex 
        });
           
           
       });
       
       describe.only('Modificar casa',function(){


           it('Tiene que ser un número', function(){
               let newCarro = new CarModel({
                   model: 'tsuru',
                   color:'rojo',
                   licensePlate:'ABC-AVD-4656',
                   houseNumber: 34,
                   year: 2005,
               });
               
                assert.throws(newCarro.modificarNumero.bind(null, "Hola"));
                assert.throws(newCarro.modificarNumero.bind(null, null));
                assert.throws(newCarro.modificarNumero.bind(null, undefined));
                assert.throws(newCarro.modificarNumero.bind(null, []));
                assert.throws(newCarro.modificarNumero.bind(null, [1]));
                expect(newCarro.modificarNumero(1)).to.be.deep.equal(1);
           });

           
           
       });      

   });


   describe.only('Eliminar Auto',function(){
       it('Tiene que existir', function(){
        let newCarro = new CarModel();

        expect(newCarro.deleteCar()).to.throw('No se puede eliminar un carro que no existe');
       });

    });


});