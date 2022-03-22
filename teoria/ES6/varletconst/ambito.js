/** AMBITO DE LAS VARIABLES let y var **/
var edad = 20;

if(true) {
 var edadVar = 60;
 console.log("edad: " + edad); // ? 40 es cierto
}

console.log("edad: " + edadVar); // ? 40 es fatal!

// Con let tambien podemos crear variables globales de manera correcta
let alturaGlobal = 400;

if(true) {
  console.log("Esto es lo que viene del ambito global " + alturaGlobal);
  let alturaIf = 20;
  console.log("altura: " + alturaIf); // ? 20 o 40
}
// console.log(alturaIf); no puedo imprimir esta variable no existe en el ambito global
console.log("altura: " + alturaGlobal); // ? que valor se va imprimir 20 o 40?