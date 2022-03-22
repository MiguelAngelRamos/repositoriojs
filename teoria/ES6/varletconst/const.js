/*
* const se utiliza para definir una constante y su valor no puede cambiar, pero! hay ciertas excepciones 
con los objetos y los arreglos (vector o array)
*/
const LENGUAJE_PROGRAMACION = "Javascript";
// LENGUAJE_PROGRAMACION = "Python";
console.log(LENGUAJE_PROGRAMACION);

// const con arrays
const arrayNumero = [10,20,30, "Hola Mundo"];
console.log(arrayNumero);
console.log(arrayNumero.length);
arrayNumero[2] = "JAVASCRIPT";
console.log(arrayNumero[3]);
arrayNumero.push(700); // Agregar un nuevo elemento al array
console.log(arrayNumero);

// Un Objeto en Javascript

const persona = {
  nombre: 'Miguel',
  lenguaje: 'Javascript'
};
console.log(persona);
console.log(persona.nombre);
persona.nombre = 'Angel'; // cambiando la propiedad nombre
console.log(persona.lenguaje);
persona.apellido = 'Ramos'; // añadir una nueva propiedad al objeto
console.log(persona);

// const > let > var