// 2. Qué es un WeakSet y en que se diferencia de un Set
// WeakSet solo permite Objetos
// En WeakSet .size no se puede ocupar
// Método .add .has .delete
// WeakSet no es Iterable
const weakSet = new WeakSet();

const cliente = {
    nombre: 'humberto',
    edad: '39'
}

// Al agregar
//const nombre = 'Valenzuela' // es un string, NO un objeto
weakSet.add(cliente);
//weakSet.add(nombre); //Invalid value used in weak set. Solo acepta objetos

console.log(weakSet.has(cliente));// true
//console.log(weakSet.has(cliente2));//cliente2 is not defined
console.log(weakSet.has('nombre')); // false

//console.log(weakSet.delete('cliente'));//Elimina objeto

// .size no se puede ocupar, es decir, no se puede saber cuanto tiene
//console.log(cliente.size);//undefined
console.log(cliente)