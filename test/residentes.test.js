const describe = require('mocha').describe;
const it = require('mocha').it;

/* TODO:
*   
*/ 

describe('Residente', () =>{

    describe('Nuevo', () => {
        it('Agrega un nuevo usuario correctamente');
        it('No debe de agregar a un nuevo si los datos están incompletos');
        it('No debe de agregar a un nuevo si los datos no son cadenas');
        it('No debe de modificar si los datos no son números');
        it('No se debe modificar si no se tiene los permisos necesarios');
    });

    describe('Eliminar', () => {
        it('No se debe modificar si no se tiene los permisos necesarios');
        it('No se puede eliminar si tiene deudas');
        it('No debe de eliminar si los datos están incompletos');
        it('Se elimina un usuario correctamente');
    });
    
    describe('Modificar', () => {
        it('No se debe modificar si no se tiene los permisos necesarios');
        it('No debe de modificar si los datos no son cadenas');
        it('No debe de modificar si los datos no son números');
    })

    describe('Accesar', () => {
        it('No se debe accesar a los datos si no se tiene los permisos necesarios');
    })
    
    

});