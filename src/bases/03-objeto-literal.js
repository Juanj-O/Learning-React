 
 const persona = {
    nombre: 'Juan',
    apellido: 'Osorio'
 };

 const persona2 = { ...persona, apellido: "Obama" };
 persona2.nombre = 'Peter'

 //console.table(persona);
console.log(persona);
console.log(persona2);