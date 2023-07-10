const map = new Map(); // cria um objeto vazio
map.set('chave1', 'valor1');
map.set('chave2', 'valor2');
map.set('chave3', 'valor3');

const entriesIterator = map.entries(); // coloca cada elemento de um objeto em um array
// next só funciona em objeto

console.log(entriesIterator)
/*
    pode ser utilizado
    console.log(entriesIterator.next())
*/