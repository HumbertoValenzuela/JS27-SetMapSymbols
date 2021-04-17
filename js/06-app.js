// 6. Iteradores en JavaScript
// Crear tu propio Iterador

function crearIterador(carrito) {
    // 1- Definir un contador
    let indice = 0;

    return { // Retorna en otra variable
        // Definir una función
        siguiente: () => {
            // Conocer el total de elementos de un array
            const fin = (indice >= carrito.length);
            // Obtener el valor actual
            const valor = !fin ? carrito[indice++] : undefined;

            return {
                fin, valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());// {fin: false, valor: "Producto 1"}
console.log(recorrerCarrito.siguiente());//{fin: false, valor: "Producto 2"}
console.log(recorrerCarrito.siguiente());// {fin: false, valor: "Producto 3"}
console.log(recorrerCarrito.siguiente());//{fin: true, valor: undefined}