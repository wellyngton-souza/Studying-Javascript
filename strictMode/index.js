"use strict" // strict é um limitador, obrigando uma pessoa a usar, let, const e var (se a pessoa não declarar a variavel vai dar erro)

const comercio = () =>{
  fruta = "banana"; // geralmente aqui funcionaria, mas por causa do use strict não vai dar certo

  return fruta;
}

console.log(comercio());