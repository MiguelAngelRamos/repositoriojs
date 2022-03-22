/*
 * Una Promesa sirve para trabajar con peticiones asincronas
 * y ademas es utilizado para disminuir el uso excesivo callback
 * 
 */

// resolve con el then
// reject con catch

// let myPromise = new Promise(function(resolve, reject) {
//   let suma = 15-5;
//   console.log(suma == 10); // falso
//   if(suma == 10) {
//     resolve('Es correcto es igual a 10')
//   } else {
//     reject('No es correcto no es igual a 10');}});

// El nuevo codigo

const myPromise = new Promise((resolve, reject) => {
  const suma = 15-5;
  suma == 10?resolve('Es correcto es igual a 10'):reject('No es correcto no es igual a 10')
});

// myPromise.then(function(message) {
//   console.log(message);
// }).catch(function(err) {
//   console.log(err);
// })

// El nuevo código

myPromise.then( message => console.log(message)).catch( err => console.log(err));

// const > let > var


// función tradicional
// function sumar(a, b) {
//   return a + b;
// }

// arrow function
// const sumar = (a, b) => {
//   return a + b;
// }

// const sumar = (a, b) => a+b;
// const resultado = sumar(20,5);
// console.log(resultado);


// funcion tradicional anonima
// function() {}

// arrow function anonima
// () => {}