// 3. Que son los Maps
// Son listas ordenadas de llave y valor. Es como un objeto pero con una sola propiedad
// la llave y valor puede ser cualquier dato arreglo, objeto etc
// tiene mejor performance que un objeto.
// son diseñados para agregar o quitar elementos o para recorrerlo
// Métodos .set .size .has .get .delete .clear .forEach
const cliente = new Map(); // new Map() es el constructor

// Métodos
// Para crear un elemento en los Map
cliente.set('nombre', 'Cecy');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

// .size cuantos elementos tiene
console.log(cliente.size);//4

// .has si una key existe
console.log(cliente.has('tipo'));//true
console.log(cliente.has('KeyNoExiste'));//false

// Obtener un valor
console.log(cliente.get('nombre'));// Cecy
console.log(cliente.get('KeyNoExiste'));// undefined

// Eliminar con la Key
// console.log(cliente.delete('nombre'));

// cliente.clear(); Limpia todo los elementos

console.log(cliente); //{"nombre" => "Cecy", "tipo" => "Premium", "saldo" => 3000, true => true}

// Map con valores
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no defenido']]);

// Asignar un valor a paciente, despúes de haber inicializado el Map
paciente.set('Dr.', 'Dr. Asignado');
// O también colocar la misma Key, eso sobreEscribe el valor
paciente.set('nombre', 'SobreEscribe');
console.log(paciente);

// Los Map son Iterables. index nos da la Key
paciente.forEach((datos, index) => console.log(index + ' ' + datos));