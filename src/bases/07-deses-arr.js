
const personajes = ['Goku', 'Trunks', 'Vegeta'];

const [ p3 ] = personajes;

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Workh

const useState = ( valor ) => {
    return [valor, ()=> { console.log('Hola Mundo')}];
}

const arr = useState('Goku');
console.log(arr)