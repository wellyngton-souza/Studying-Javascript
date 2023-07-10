let A = 20;

console.log(A << 2); // 80 move os bits para esquerda
console.log(A >> 2); // 5 move os bits para direita

let B = 15; // Representado em binário como 1111
let C = 7; // Representado em binário como 0111

A = B & C; // Realiza a operação AND bit a bit

console.log(A); // 7

// 5 Representado em binário como 1010
// 10 Representado em binário como 0101

let D = 10;
D = D | 5; // Realiza a operação OR bit a bit
console.log(D); // O resultado será 15

let defaultValue = "Valor padrão";
let value = null;

let E = value ?? defaultValue;

console.log(result); // O resultado será "Valor padrão"

let a = true;
let b = false;

let F = a || b;

console.log(result); // O resultado será true