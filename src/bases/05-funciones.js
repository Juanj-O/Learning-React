

// Funciones en JS

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

// console.log(saludar('jhon'))
// console.log(saludar2('jhon'))
// console.log(saludar3('jhon'))

const getUser = () => ({
    uid: 'ABC123',
    nombre: 'Ernesto',
})

console.log(getUser());

function getUsuarioActivo ( nombre ) {
    return {
        uid: 'DEF456',
        nombre: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Peter');

console.log(usuarioActivo);

const getUsuarioA = ( nombre ) => ({
    uid: 'GHJ987',
    nombre: nombre,
});

const usuarioA = getUsuarioA('Poter');

console.log(usuarioA);