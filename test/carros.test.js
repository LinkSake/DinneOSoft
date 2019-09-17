const describe = require('mocha').describe;
const it = require('mocha').it;
const { expect } = require('chai');

const CarModel = require('../models/carros.model').CarModel;

describe('Autos',function(){
        
        describe('Dar de Alta Año',function(){

            it('No puede ser mayor del año actual +3',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        color: 'Silver',
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01,
                        year: 2017
                    });
                    
                    var date = new Date();
                    var year = (date.getFullYear() + 3); 

                    expect(newCar.getYear()).to.be.below(year);
                    //newCar.setYear('2077');
                    //expect(newCar.getYear.bind(null, null)).to.throw();

            });

            it('No puede ser nulo',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        color: 'Silver',
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01
                    });
                    
                    expect(newCar.setYear.bind(null, null)).to.throw();
            });
                
            it('Tiene que ser un numero positivo',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        color: 'Silver',
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01
                    });

                    expect(newCar.setYear.bind(null,':(')).to.throw();
                    expect(newCar.setYear.bind(null,undefined)).to.throw();
                    expect(newCar.setYear.bind(null,[])).to.throw();
                    expect(newCar.setYear.bind(null,-1)).to.throw();
            });    
        });

        describe('Dar de Alta color',function(){
            it('Debe de ser una cadena',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        year: 2017,
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01
                    });

                    expect(newCar.setColor.bind(null,1)).to.throw();
                    expect(newCar.setColor.bind(null,undefined)).to.throw();
                    expect(newCar.setColor.bind(null,[])).to.throw();
                    newCar.setColor('Silver');
                    expect(newCar.getColor()).to.be.deep.equal('Silver');
            });

            it('No puede ser nulo',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        year: 2017,
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01
                    });

                    expect(newCar.setColor.bind(null,null)).to.throw();
            });
        });

        describe('Dar de Alta Modelo',function(){
            it('Tiene que ser de tipo String',function(){

                    let newCar = new CarModel({
                        color: 'Silver',
                        year: 2017,
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01
                    });

                    expect(newCar.setModel.bind(null,1)).to.throw();
                    expect(newCar.setModel.bind(null,undefined)).to.throw();
                    expect(newCar.setModel.bind(null,[])).to.throw();
                    newCar.setModel('Civic');
                    expect(newCar.getModel()).to.be.deep.equal('Civic');

            });

            it('No puede ser nulo',function(){
                    let newCar = new CarModel({
                        color: 'Silver',
                        year: 2017,
                        licensePlate: 'AAA-BBB-0000',
                        houseNumber: 01
                    });

                    expect(newCar.setModel.bind(null,null)).to.throw();
            });
        });

        describe('Dar de Alta Placa',function(){
            it('Tiene que coincidir con el patron del REGEX',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        color: 'Silver',
                        year: 2017,
                        houseNumber: 01
                    });

                    expect(newCar.setPlate.bind(null, ':(')).to.throw();
                    newCar.setPlate('AAA-BBB-0000');
                    expect(newCar.getPlate()).to.be.deep.equal('AAA-BBB-0000');

            }); 
                
            it('No puede ser nulo',function(){
                    let newCar = new CarModel({
                        model: 'Civic',
                        color: 'Silver',
                        year: 2017,
                        houseNumber: 01
                    });

                    expect(newCar.setPlate.bind(null,null)).to.throw();
                    
            });     
        });
});