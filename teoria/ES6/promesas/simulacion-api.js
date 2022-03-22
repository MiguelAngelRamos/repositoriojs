// Una simulación del Api

function apiSimulator() {
  return new Promise(function(resolve, reject) {
    let resultadoJson = true;
    if(resultadoJson) {
      const producto = {
        nombre: 'Iphone',
        color: 'space gray'
      }
      resolve(producto);
    } else {
      reject("error 500"); // que no se pudo retornar el objeto del producto
    }
  });
}

apiSimulator().then(function(producto){
  console.log(producto);
}).catch(function(err) {
  console.log(err);
});