// 4. Que son los WeakMaps
// Sirve para mantener una serie de datos como privados
// Son listas ordenadas de llave y valor.
// WeakMap no se puede Iterar
// WeakMap .size no funciona (undefined)
// Solo acepta Objetos

const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');

// Ver si existe el objeto producto dentro de WeakMap
console.log( weakMap.has(producto) ); // true 

// Extraer la información que tiene ese weakMap
// Notar que 10 no fue extraido
// Entonces no se puede acceder a idProducto con .get
console.log( weakMap.get(producto) );

// Eliminar
// console.log( weakMap.delete(producto) );