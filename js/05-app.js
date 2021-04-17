// 5. Symbols y sus Caracteristicas

// Permite crear una propiedad única
// No existen Symbols que sean iguales
// Es ocupado en algúnas librerías
// Las propiedades de un objeto que utilizan un Symbol no son Iterables
// Symbol, No utiliza new

const sym1 = Symbol(); // Symbol(1) 
const sym2 = Symbol(); // Symbol(1)

if (sym1 == sym2) {
    console.log('son iguales');    
} else {
    console.log('son diferentes'); // retorna son Diferentes
}
//  console.log(Symbol() === Symbol()); // retorna false

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto
// Se ocupa Symbol() como una de las propiedades de este objeto
persona[nombre] = 'Humberto';// Symbol(): "Humberto"
persona[apellido] = 'Valenzuela';// Symbol(): "Valenzuela"
persona.tipoCliente = 'Premium'; //tipoCliente: "Premium"
persona.saldo = 500;// saldo: 500

console.log(persona);

// ¿Como acceder a nombre si es un Symbol?
console.log(persona.nombre);//undefined
console.log(persona[nombre]); // Humberto

// Las propiedades de un objeto que utilizan un Symbol no son Iterables

for (let i in persona) {
    console.log(i); // tipoCliente y saldo. pero nombre y apellido no lo Itera
}

// Definir una descripcion del Symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Rodolfo';// Symbol(Nombre del Cliente): "Rodolfo"
console.log(cliente);
console.log(cliente[nombreCliente]);// Rodolfo
console.log(nombreCliente);// Symbol(Nombre del Cliente)