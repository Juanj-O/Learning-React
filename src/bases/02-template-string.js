
const nombre = 'Juan';
const apellido = 'Osorio';

const fullName = `
${ nombre } 
${ apellido } 
${ 1 + 1} 
`;


console.log(fullName);

function getSaludo() {
    return 'Hola Mundo';
}

console.log( `Este es un saludo ${ getSaludo() }`);