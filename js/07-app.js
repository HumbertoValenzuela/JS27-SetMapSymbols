// 7. Generadores en JavaScript
// Un generador es una función que retorna un Iterador
// * significa que la función es un Generador
// Palabra reservada llamada yield, son valores que se pueden Iterar
function *crearGenerador() {
    // En este caso se definen. Son de Forma estática
    yield 1;
    yield 'humberto';    
    yield true;
    yield 4+4;
}

const iterador = crearGenerador();

console.log(iterador);
// Formas para acceder a diferentes
console.log(iterador.next());// {value: 1, done: false}
console.log(iterador.next().value);// humberto
console.log(iterador.next().done);// accede al tercer elemento. mostrando la info de .done que es false
console.log(iterador.next().value); // 8
console.log(iterador.next());// {value: undefined, done: true} 
// Al revisar vuelve a suspended
console.log(iterador); // crearGenerador {<closed>}

// Next y suspended están relacionados
// next hace pasar al sgte yield
// Next es para salir de suspended. termina Next y vuelve a suspended


 // En este caso se definen de Forma dinamica
 function *generadorCarrito(carrito) {
     for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
     }
 }

 const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

 const iterandoCarrito = generadorCarrito(carrito);
 console.log(iterandoCarrito.next()); //Producto 1 done: false
 console.log(iterandoCarrito.next()); //Producto 2 done: false
 console.log(iterandoCarrito.next()); //Producto 3 done: false
 console.log(iterandoCarrito.next()); //undefined done: true
 