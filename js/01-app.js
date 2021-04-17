// 1. Sets y sus Caracteristicas
// Un set permite crear una lista de valores, sin duplicados
// crea lista de objeto, arreglo, number, array, string
// Los  set son valores, es decir, no es key, value como un objeto
// Es KeySensitive
// No repite elementos y no los agrega al set
// Los Set son iterables
// Métodos .add .size .has .delete .clear

const carrito = new Set();

// Set method add
 carrito.add('Camisa'); //add agrega elemento
 carrito.add('Camisa 1');
 carrito.add('Camisa 2');
 carrito.add('Camisa 3');
 carrito.add('Camisa'); // Es igual no lo repite y no lo agrega al set
//Resultado en Chrome  Set(4) {"Camisa", "Camisa 1", "Camisa 2", "Camisa 3"} 

// Set method .size
console.log(carrito.size);// 4

//Set method .has. Comprobar si un valor existe en el set
console.log(carrito.has('Camisa')); //true

//Set method .delete
//carrito.delete('Camisa 1');
//console.log(carrito.delete('Camisa 1')); // Retorna true o false

//Set method .clear
//carrito.clear(); // Vaciar todos los elementos

// Los Set son iterables
carrito.forEach( producto => console.log(producto))

console.log(carrito);

// Del sgte arreglo, eliminar los duplicados
const numero = [10, 20, 30, 40, 50, 10, 20, 30, 30, 10];
const noDuplicados = new Set(numero);
console.log(noDuplicados);