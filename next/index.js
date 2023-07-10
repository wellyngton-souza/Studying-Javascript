const map = new Map(); // cria um objeto vazio

map.set("chave1", "valor1");
map.set("chave2", "valor2");
map.set("chave3", "valor3");

const entriesIterator = map.entries(); // coloca cada elemento de um objeto em um array

console.log(entriesIterator.next())
console.log(entriesIterator.next())
console.log(entriesIterator.next())
console.log(entriesIterator.next())
// next só funciona em objetos que possuem array dentro

console.log(map.get("chave2")) // valor 2
/*
const contagem = {
    comida: ["frango", "ovo", "acem", "bisteca", "conserva"],
    i: 0,
    next(){
        console.log(this.comida[this.i++]);
    }
}

contagem.next();
*/