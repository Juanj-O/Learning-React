import { getHeroeById } from './bases/08-export-import';

// const promesa = new Promise ((resolve, reject) => {

//     setTimeout(() =>{
//         //WORKHOME

//         const heroe = getHeroeById(2);
//         resolve(heroe);

//         // resolve();
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //WORKHOME

            const heroe = getHeroeById(2);
            resolve(heroe);


        }, 2000);

    });
}

getHeroeByIdAsync(3)
    .then(heroe => console.log('Heroe', heroe))