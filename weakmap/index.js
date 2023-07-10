const cache = new WeakMap(); // cria um elemento map, porem com limitações sendo que é descartado com base o gerenciamento de maquina

const calcularResultado = (objeto) =>{
  if (cache.has(objeto)) {
    console.log("Recuperando dados do cache");
    return cache.get(objeto);
  }

  console.log("Realizando cálculos");
  const resultado = objeto.valor * 2;

  cache.set(objeto, resultado);
  return resultado;
}

const objeto1 = { valor: 5 };
const objeto2 = { valor: 10 };

console.log(calcularResultado(objeto1));
console.log(calcularResultado(objeto1));
console.log(calcularResultado(objeto2));
console.log(calcularResultado(objeto2));