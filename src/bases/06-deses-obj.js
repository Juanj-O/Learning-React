

//desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;

// console.log( nombre, edad, clave );
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitán'} )  => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 12.123123,
            lng: -2324.232,
        }
    }
}

const { nombreClave, anios, latlng } = retornaPersona(persona);

console.log(nombreClave, anios, latlng);