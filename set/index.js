const meuSet = new Set(); // cria um objeto que aceita apenas o valor elementos

meuSet.add(1);
meuSet.add(2);
meuSet.add(3);
meuSet.add(3); // Tentativa de adicionar um valor duplicado (não será adicionado)

console.log(meuSet.has(2)); // true
console.log(meuSet.size); // 3

meuSet.delete(2);
console.log(meuSet.has(2)); // false
console.log(meuSet.size); // 2

meuSet.clear();
console.log(meuSet.size); // 0