// Filter ( nos va filtrar)
const carrito = [
  { nombre: 'Notebook MSI', precio: 1600},
  { nombre: 'Mouse Razer', precio: 150},
  { nombre: 'Aufinos Razer', precio: 200},
  { nombre: 'Monitor LG', precio: 300},
  { nombre: 'Macbook pro', precio: 3000},
  { nombre: 'Iphone', precio: 1000}
];

const resultadoFilter = carrito.filter( producto => producto.precio >= 1000);
console.log(resultadoFilter);

// "Eliminar" con filter
const resultadoFilterEliminar = carrito.filter( p => p.nombre !== 'Monitor LG');
console.log( resultadoFilterEliminar);


// == igual que
// !== distinto que
// = asignación

// '5' == 5 // ? falso o verdadero??
// '5' === 5 // falso
// == de comparación con valor