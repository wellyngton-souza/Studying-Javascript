let A = 20;

(A *= 2, A *= 2, A *=2); // executa inumeros comandos na mesma linha

console.log(A); // 160

let B = 2;

B = (B += 5, B *= 2, B); // pode ser uma sequencia de comandos infinita, apenas o ultimo valor é o que vale

console.log(B); // 14