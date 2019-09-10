const describe = require('mocha').describe;
const it = require('mocha').it;
const mongoose = require('mongoose');
const assert = require('chai').assert;

const CarModel = require('../models/carros.model').CarModel;

mongoose.promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27014/frac');

describe('RegistroAutos',function(){
    //Funcionalidad de modificar Actividad
    describe('Registrar Auto',function(){
        
         describe('Dar de Alta Año',function(){
             it('Número de 4 dígitos');
             it('No puede ser nulo');
        });
         describe('Dar de Alta color',function(){
             it('tipo String');
             it('No puede ser nulo');
        
         });
         describe('Dar de Alta Modelo',function(){
             it('Tiene que ser de tipo String');
             it('No puede ser nulo');
         });

         describe('Dar de Alta Placa',function(){
            it('Tiene que ser de tipo String');
            it('No puede ser nulo');
            
        });
        
        describe('Asignar casa',function(){
            it('Tiene que existir en el registro de las casas');
            it('No puede ser nulo');
            
        });
         
 
    });
    
    describe('Modificar Auto',function(){
        
        describe('Modificar Año',function(){
            it('Número de 4 dígitos');
            it('No puede ser nulo');
       });
        describe('Modificar color',function(){
            it('tipo String');
            it('No puede ser nulo');
       
        });
        describe('Modificar Modelo',function(){
            it('Tiene que ser de tipo String');
            it('No puede ser nulo');
        });

        describe('Modificar Placa',function(){
           it('Tiene que ser de tipo String');
           it('No puede ser nulo');
           
       });
       
       describe('Modificar casa',function(){
           it('Tiene que existir en el registro de las casas');
           it('No puede ser nulo');
           
       });      

   });


   describe('Eliminar Auto',function(){

    });

});