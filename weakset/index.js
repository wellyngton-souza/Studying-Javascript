const comercio = new WeakSet(); // parecido com o set/weakmap, mas funciona utilizando objetos

let frutas = {
    vitaminaC: "banana",
    vitaminaA: "lorem"
};

comercio.add(frutas);

console.log(comercio.has(frutas));