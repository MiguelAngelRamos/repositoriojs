const carrito = [];

// Productos

const producto = {
  nombre: 'Iphone 13',
  precio: 1200
};

const producto2 = {
  nombre: 'Notebook Gamer Asus',
  precio: 2000
};

const producto3 = {
  nombre: 'Teclado Gamer Razer',
  precio: 100
}

const producto4 = {
  nombre: 'Mouse Gamer Razer',
  precio: 80
}
const producto5 = {
  nombre: 'Macbook pro',
  precio: 3000
}
// Podemos añadir elementos a nuestro Arreglo "carrito"

// Función push
console.log(carrito);
carrito.push(producto3) // "push" agrego un nuevo al elemento al final del array
carrito.push(producto);
carrito.unshift(producto2); // puedo añadir al princio del array
console.log(carrito);
carrito.pop(); // puedo eliminar el "ultimo" elemento de un array
console.log(carrito);
carrito.shift(); // Eliminar el primer elemento del array
carrito.push(producto4);
carrito.push(producto5);
console.log(carrito);

// "splice" Donde queremos comenzar a eliminar y cuantos elementos deseamos eliminar
carrito.splice(1,1);
console.log(carrito);
// carrito = [];
console.log(carrito);